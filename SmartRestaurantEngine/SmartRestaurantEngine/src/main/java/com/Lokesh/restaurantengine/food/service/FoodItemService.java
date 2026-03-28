package com.Lokesh.restaurantengine.food.service;

import com.Lokesh.restaurantengine.exception.ResourceNotFoundException;
import com.Lokesh.restaurantengine.exception.*;
import com.Lokesh.restaurantengine.food.dto.FoodItemRequest;
import com.Lokesh.restaurantengine.food.dto.FoodItemResponse;
import com.Lokesh.restaurantengine.food.entity.FoodItem;
import com.Lokesh.restaurantengine.food.repository.FoodItemRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class FoodItemService {

    private final FoodItemRepository repository;

    public FoodItemService(FoodItemRepository repository) {
        this.repository = repository;
    }

    // CREATE / UPDATE
    public FoodItemResponse save(FoodItemRequest request) {
        FoodItem item = new FoodItem(
                null,
                request.getProductId(),
                request.getName(),
                request.getPrice(),
                request.getImage()
        );

        FoodItem saved = repository.save(item);
        return mapToResponse(saved);
    }

    // GET ALL
    @Cacheable(
            value = "menuCache",
            key = "'all'",
            unless = "#result == null || #result.isEmpty()"
    )
    public List<FoodItemResponse> getAll() {
        System.out.println("🔥 Fetching ALL food items from DB...");
        return repository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // GET BY ID
    public FoodItemResponse getById(String id) {
        FoodItem item = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Food item not found with id: " + id));

        return mapToResponse(item);
    }

    // GET BY PRODUCT ID
    public FoodItemResponse getByProductId(String productId) {
        FoodItem item = repository.findByProductId(productId);
        if (item == null) {
            throw new ResourceNotFoundException(
                    "Food item not found with productId: " + productId);
        }
        return mapToResponse(item);
    }

    // DELETE BY PRODUCT ID
    public void deleteByProductId(String productId) {
        FoodItem item = repository.findByProductId(productId);
        if(item == null) {
            throw new ResourceNotFoundException(
                    "Food item not found with productId: " + productId);
        }
        repository.delete(item);
    }

    // SEARCH
    @Cacheable(
            value = "foodSearchCache",
            key = "#root.methodName + ':' + #term.trim().toLowerCase()",
            unless = "#result == null || #result.isEmpty()"
    )
    public List<FoodItemResponse> search(String term) {

        if (term == null || term.isBlank()) return List.of();

        // Normalize term
        String normalizedTerm = term.trim().toLowerCase();

        // Convert to regex → "biryani rice" → "biryani|rice"
        String regex = Arrays.stream(normalizedTerm.split("\\s+"))
                .map(Pattern::quote) // ✅ prevents regex injection
                .collect(Collectors.joining("|"));

        System.out.println("🔥 Fetching from DB for term: " + normalizedTerm);

        return repository.findByNameSimilar(regex)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // MAPPER
    private FoodItemResponse mapToResponse(FoodItem item) {
        return new FoodItemResponse(
                item.getId(),
                item.getProductId(),
                item.getName(),
                item.getPrice(),
                item.getImage()
        );
    }
}

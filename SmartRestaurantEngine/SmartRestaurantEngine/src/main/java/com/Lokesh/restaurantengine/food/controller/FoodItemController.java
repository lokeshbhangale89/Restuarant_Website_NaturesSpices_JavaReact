package com.Lokesh.restaurantengine.food.controller;

import com.Lokesh.restaurantengine.food.dto.FoodItemRequest;
import com.Lokesh.restaurantengine.food.dto.FoodItemResponse;
import com.Lokesh.restaurantengine.food.dto.FoodItemsResponse;
import com.Lokesh.restaurantengine.food.service.FoodItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/fooditems")
public class FoodItemController {

    private final FoodItemService service;

    public FoodItemController(FoodItemService service) {
        this.service = service;
    }

    // CREATE / UPDATE
    @PostMapping
    public ResponseEntity<FoodItemResponse> create(@RequestBody FoodItemRequest request) {
        return ResponseEntity.ok(service.save(request));
    }

    // GET ALL
    @GetMapping
    public ResponseEntity<FoodItemsResponse> getAll() {
        return ResponseEntity.ok(new FoodItemsResponse(service.getAll()));
    }

//    // GET BY ID = not needed.
//    @GetMapping("/{id}")
//    public ResponseEntity<FoodItemResponse> getById(@PathVariable String id) {
//        return ResponseEntity.ok(service.getById(id));
//    }

    // GET BY PRODUCT ID
    @GetMapping("/product/{productId}")
    public ResponseEntity<FoodItemResponse> getByProductId(
            @PathVariable int productId) {
        return ResponseEntity.ok(service.getByProductId(productId));
    }

    // DELETE
    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteByProductId(@PathVariable int productId) {
        service.deleteByProductId(productId);
        return ResponseEntity.noContent().build();
    }

    // SEARCH
    @GetMapping("/search")
    public ResponseEntity<List<FoodItemResponse>> search(
            @RequestParam String q) {
        return ResponseEntity.ok(service.search(q));
    }
}

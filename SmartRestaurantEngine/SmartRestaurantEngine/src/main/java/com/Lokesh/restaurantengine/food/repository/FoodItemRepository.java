package com.Lokesh.restaurantengine.food.repository;

import com.Lokesh.restaurantengine.food.entity.FoodItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface FoodItemRepository extends MongoRepository<FoodItem, String> {

    FoodItem findByProductId(String productId);

    @Query("{ 'name': { $regex: ?0, $options: 'i' } }")
    List<FoodItem> findByNameSimilar(String searchTerm);
}

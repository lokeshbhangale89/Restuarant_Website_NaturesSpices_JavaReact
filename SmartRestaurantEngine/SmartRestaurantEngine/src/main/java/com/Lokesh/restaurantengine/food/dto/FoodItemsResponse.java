package com.Lokesh.restaurantengine.food.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class FoodItemsResponse {
    private List<FoodItemResponse> products;
}


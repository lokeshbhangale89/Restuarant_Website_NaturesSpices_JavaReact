package com.Lokesh.restaurantengine.food.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodItemResponse {

    private String id;
    private String productId;
    private String name;
    private double price;
    private String image;
}

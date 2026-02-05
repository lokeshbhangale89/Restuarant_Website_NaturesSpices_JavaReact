package com.Lokesh.restaurantengine.food.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FoodItemResponse {

    private String id;
    private int productId;
    private String name;
    private double price;
    private String image;
}

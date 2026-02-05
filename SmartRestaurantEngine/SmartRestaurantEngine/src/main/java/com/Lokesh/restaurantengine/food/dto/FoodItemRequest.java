package com.Lokesh.restaurantengine.food.dto;

import lombok.Data;

@Data
public class FoodItemRequest {

    private int productId;
    private String name;
    private double price;
    private String image;
}

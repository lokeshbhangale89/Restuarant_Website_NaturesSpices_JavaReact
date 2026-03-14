package com.Lokesh.restaurantengine.cart.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CartItemResponse {
    private String productId;
    private String name;
    private double price;
    private String image;
    private int quantity;
}

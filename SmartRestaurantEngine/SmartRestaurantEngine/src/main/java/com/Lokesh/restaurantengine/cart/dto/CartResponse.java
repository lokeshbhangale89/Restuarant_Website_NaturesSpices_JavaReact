package com.Lokesh.restaurantengine.cart.dto;

import com.Lokesh.restaurantengine.cart.entity.CartItem;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class CartResponse {
    private List<CartItemResponse> cart;
    private double total;
}


package com.Lokesh.restaurantengine.cart.entity;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {

    private String productId;
    private int quantity;
}

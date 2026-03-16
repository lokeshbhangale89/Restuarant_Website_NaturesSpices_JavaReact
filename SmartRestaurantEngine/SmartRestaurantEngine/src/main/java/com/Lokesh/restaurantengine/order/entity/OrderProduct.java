package com.Lokesh.restaurantengine.order.entity;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderProduct {

    private String productId;

    private String name;

    private double price;

    private int quantity;
}
package com.Lokesh.restaurantengine.order.dto;

import lombok.Data;

@Data
public class OrderItemDto {

    private String productId;

    private int quantity;
}
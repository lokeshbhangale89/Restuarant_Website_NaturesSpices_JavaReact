package com.Lokesh.restaurantengine.order.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class OrderResponse {

    private String id;

    private List<OrderItemDto> products;

    private String name;

    private String contactno;

    private String address;

    private double total;
}
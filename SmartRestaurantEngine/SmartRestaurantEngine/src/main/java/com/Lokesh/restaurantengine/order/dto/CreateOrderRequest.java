package com.Lokesh.restaurantengine.order.dto;

import lombok.Data;
import java.util.List;

@Data
public class CreateOrderRequest {

    private String name;

    private String contactno;

    private String address;

    private List<OrderItemDto> cartItems;

    private double cartTotal;
}
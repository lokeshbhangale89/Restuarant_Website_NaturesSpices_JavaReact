package com.Lokesh.restaurantengine.order.controller;

import com.Lokesh.restaurantengine.order.dto.CreateOrderRequest;
import com.Lokesh.restaurantengine.order.entity.Order;
import com.Lokesh.restaurantengine.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/createorders")
    public Map<String, String> createOrder(
            @RequestBody CreateOrderRequest request,
            Authentication authentication
    ) {

        String userId = authentication.getName();

        orderService.createOrder(request, userId);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Order created successfully.");

        return response;
    }

    @GetMapping("/getordersbyuser")
    public Map<String, List<Order>> getOrdersByUser(Authentication authentication) {

        String userId = authentication.getName();

        List<Order> orders = orderService.getOrdersByUser(userId);

        Map<String, List<Order>> response = new HashMap<>();
        response.put("orders", orders);

        return response;
    }
}
package com.Lokesh.restaurantengine.order.service;

import com.Lokesh.restaurantengine.food.entity.FoodItem;
import com.Lokesh.restaurantengine.food.repository.FoodItemRepository;
import com.Lokesh.restaurantengine.order.dto.CreateOrderRequest;
import com.Lokesh.restaurantengine.order.dto.OrderItemDto;
import com.Lokesh.restaurantengine.order.entity.Order;
import com.Lokesh.restaurantengine.order.entity.OrderProduct;
import com.Lokesh.restaurantengine.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final FoodItemRepository foodItemRepository;

    public void createOrder(CreateOrderRequest request, String userId) {

        List<OrderProduct> products = new ArrayList<>();

        for (OrderItemDto item : request.getCartItems()) {

            FoodItem food = foodItemRepository.findByProductId(item.getProductId());

            if (food == null) {
                throw new RuntimeException("Product not found: " + item.getProductId());
            }

            products.add(
                    OrderProduct.builder()
                            .productId(food.getProductId())
                            .name(food.getName())
                            .price(food.getPrice())
                            .quantity(item.getQuantity())
                            .build()
            );
        }

        Order order = Order.builder()
                .user(userId)
                .name(request.getName())
                .contactno(request.getContactno())
                .address(request.getAddress())
                .products(products)
                .total(request.getCartTotal())
                .build();

        orderRepository.save(order);
    }

    public List<Order> getOrdersByUser(String userId) {
        return orderRepository.findByUser(userId);
    }
}
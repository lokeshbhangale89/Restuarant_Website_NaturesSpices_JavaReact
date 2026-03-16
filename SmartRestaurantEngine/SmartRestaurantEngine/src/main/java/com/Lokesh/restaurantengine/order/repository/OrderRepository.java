package com.Lokesh.restaurantengine.order.repository;

import com.Lokesh.restaurantengine.order.entity.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrderRepository extends MongoRepository<Order, String> {

    List<Order> findByUser(String userId);

}
package com.Lokesh.restaurantengine.food.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodItem {

    @Id
    private String id;

    private int productId;
    private String name;
    private double price;
    private String image;
}

package com.Lokesh.restaurantengine.food.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FoodItem {

    @Id
    private String id;

    private String productId;
    private String name;
    private double price;
    private String image;
}

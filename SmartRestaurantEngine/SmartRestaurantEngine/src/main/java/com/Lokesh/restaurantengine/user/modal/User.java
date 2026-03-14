package com.Lokesh.restaurantengine.user.modal;

import com.Lokesh.restaurantengine.cart.entity.CartItem;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "users")
public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private String role;  // USER / ADMIN

    private List<CartItem> cart = new ArrayList<>();

    @CreatedDate
    private Instant createdAt;

    @LastModifiedDate
    private Instant updatedAt;
}

package com.Lokesh.restaurantengine.user.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@NoArgsConstructor
public class SignupRequest {
    private String name;
    private String email;
    private String password;

    // getters and setters
}

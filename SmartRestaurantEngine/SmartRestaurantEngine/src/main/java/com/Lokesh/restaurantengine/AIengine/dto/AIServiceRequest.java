package com.Lokesh.restaurantengine.AIengine.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AIServiceRequest {
    private String message;
    private String token;
    private String user_id;
}
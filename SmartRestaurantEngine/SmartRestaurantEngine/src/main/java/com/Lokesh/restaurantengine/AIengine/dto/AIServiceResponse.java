package com.Lokesh.restaurantengine.AIengine.dto;

import lombok.Data;

import java.util.List;

@Data
public class AIServiceResponse {
    private String userId;
    private List<AIMessage> message;
}
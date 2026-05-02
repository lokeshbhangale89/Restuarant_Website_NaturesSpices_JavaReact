package com.Lokesh.restaurantengine.AIengine.service;

import com.Lokesh.restaurantengine.AIengine.dto.AIServiceRequest;
import com.Lokesh.restaurantengine.AIengine.dto.AIServiceResponse;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AIService {

    private final RestTemplate restTemplate;

    private final String AI_URL = "http://host.docker.internal:8000/chat";

    public AIService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public AIServiceResponse callAI(
            String message,
            String token,
            String userId
    ) {

        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }

        AIServiceRequest request = new AIServiceRequest(
                message,
                token,
                userId
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(token);

        HttpEntity<AIServiceRequest> entity = new HttpEntity<>(request, headers);

        ResponseEntity<AIServiceResponse> response = restTemplate.exchange(
                AI_URL,
                HttpMethod.POST,
                entity,
                AIServiceResponse.class
        );

        return response.getBody();
    }
}
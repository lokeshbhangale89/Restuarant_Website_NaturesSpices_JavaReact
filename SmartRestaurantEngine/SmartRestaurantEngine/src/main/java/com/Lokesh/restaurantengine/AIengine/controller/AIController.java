package com.Lokesh.restaurantengine.AIengine.controller;

import com.Lokesh.restaurantengine.AIengine.dto.ChatRequestDTO;
import com.Lokesh.restaurantengine.AIengine.dto.AIServiceResponse;
import com.Lokesh.restaurantengine.AIengine.service.AIService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/api/ai")
public class AIController {

    private final AIService aiService;

    public AIController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/chat")
    public AIServiceResponse chat(
            @RequestBody ChatRequestDTO request,
            HttpServletRequest httpRequest,
            Authentication authentication
    ) {

        // ✅ 1. Try extracting token from cookie
        String token = extractTokenFromCookies(httpRequest);

        // ✅ 2. Fallback to Authorization header
        if (token == null) {
            String authHeader = httpRequest.getHeader("Authorization");

            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                token = authHeader.substring(7);
            }
        }

        if (token == null) {
            throw new RuntimeException("User not authenticated");
        }

        // ✅ 3. Get userId safely
        String userId = (authentication != null) ? authentication.getName() : "test-user";

        // ✅ 4. Call AI service
        return aiService.callAI(
                request.getMessage(),
                token,
                userId
        );
    }

    private String extractTokenFromCookies(HttpServletRequest request) {

        if (request.getCookies() == null) return null;

        return Arrays.stream(request.getCookies())
                .filter(c -> "token".equals(c.getName()))
                .findFirst()
                .map(Cookie::getValue)
                .orElse(null);
    }
}
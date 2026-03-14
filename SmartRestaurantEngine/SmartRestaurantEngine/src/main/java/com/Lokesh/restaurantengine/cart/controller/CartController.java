package com.Lokesh.restaurantengine.cart.controller;

import com.Lokesh.restaurantengine.cart.dto.AddToCartRequest;
import com.Lokesh.restaurantengine.cart.dto.CartResponse;
import com.Lokesh.restaurantengine.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping("/addtocart")
    public CartResponse addToCart(
            @RequestBody AddToCartRequest request,
            Authentication authentication
    ) {
        // userId extracted from Spring Security context
        String userId = authentication.getName();

        return cartService.addToCart(request, userId);
    }

    @GetMapping("/getcartitems")
    public CartResponse getCart(Authentication authentication) {
        String userId = authentication.getName();
        return cartService.getCart(userId);
    }

    @DeleteMapping("/remove")
    public void removeItem(
            @RequestParam String productId,
            Authentication authentication
    ) {
        String userId = authentication.getName();
        cartService.removeItem(userId, productId);
    }

    @DeleteMapping("/clear")
    public void clearCart(Authentication authentication) {
        String userId = authentication.getName();
        cartService.clearCart(userId);
    }
}

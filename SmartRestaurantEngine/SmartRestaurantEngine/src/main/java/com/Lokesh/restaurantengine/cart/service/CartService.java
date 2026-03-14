package com.Lokesh.restaurantengine.cart.service;

import com.Lokesh.restaurantengine.cart.dto.AddToCartRequest;
import com.Lokesh.restaurantengine.cart.dto.CartItemResponse;
import com.Lokesh.restaurantengine.cart.dto.CartResponse;
import com.Lokesh.restaurantengine.cart.entity.Cart;
import com.Lokesh.restaurantengine.cart.entity.CartItem;
import com.Lokesh.restaurantengine.cart.repository.CartRepository;
import com.Lokesh.restaurantengine.exception.BadRequestException;
import com.Lokesh.restaurantengine.food.entity.FoodItem;
import com.Lokesh.restaurantengine.food.repository.FoodItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final FoodItemRepository productRepository;

    public CartResponse addToCart(AddToCartRequest request, String userId) {

        if (request.getProductId() == null) {
            throw new BadRequestException("ProductId cannot be null");
        }

        Cart cart = cartRepository.findByUserId(userId)
                .orElseGet(() -> Cart.builder()
                        .userId(userId)
                        .products(new ArrayList<>())
                        .build());

        CartItem item = cart.getProducts().stream()
                .filter(p -> Objects.equals(p.getProductId(), request.getProductId()))
                .findFirst()
                .orElse(null);

        if (item != null) {
            item.setQuantity(item.getQuantity() + request.getQuantity());
        } else {
            cart.getProducts().add(
                    CartItem.builder()
                            .productId(request.getProductId())
                            .quantity(request.getQuantity())
                            .build()
            );
        }

        cartRepository.save(cart);
        return buildCartResponse(cart);
    }

    public CartResponse getCart(String userId) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
        return buildCartResponse(cart);
    }

    public void removeItem(String userId, String productId) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        boolean removed = cart.getProducts()
                .removeIf(item -> Objects.equals(item.getProductId(), productId));

        if (!removed) {
            throw new RuntimeException("Product not found in cart: " + productId);
        }

        cartRepository.save(cart);
    }

    public void clearCart(String userId) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        cart.getProducts().clear();
        cartRepository.save(cart);
    }

    private CartResponse buildCartResponse(Cart cart) {

        List<CartItemResponse> items = new ArrayList<>();
        double total = 0;

        for (CartItem item : cart.getProducts()) {

            if (item.getProductId() == null) {
                throw new RuntimeException("Cart contains item with null productId");
            }

            FoodItem product = productRepository
                    .findByProductId(item.getProductId());
            if (product == null) {
                throw new RuntimeException("Product not found for id: " + item.getProductId());
            }

            total += product.getPrice() * item.getQuantity();

            items.add(new CartItemResponse(
                    product.getProductId(),
                    product.getName(),
                    product.getPrice(),
                    product.getImage(),
                    item.getQuantity()
            ));
        }

        return new CartResponse(items, total);
    }
}

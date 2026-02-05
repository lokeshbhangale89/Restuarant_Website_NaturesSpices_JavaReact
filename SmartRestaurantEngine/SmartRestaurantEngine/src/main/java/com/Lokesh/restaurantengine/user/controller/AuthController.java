package com.Lokesh.restaurantengine.user.controller;

import com.Lokesh.restaurantengine.user.dto.LoginRequest;
import com.Lokesh.restaurantengine.user.dto.SignupRequest;
import com.Lokesh.restaurantengine.user.modal.User;
import com.Lokesh.restaurantengine.user.repository.UserRepository;
import com.Lokesh.restaurantengine.user.security.JwtProvider;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Map;

@RestController
@RequestMapping("/user/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    public AuthController(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtProvider jwtProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtProvider = jwtProvider;
    }

    @PostMapping("/register")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {

        // 1. Validate required fields
        if (request.getName() == null ||
                request.getEmail() == null ||
                request.getPassword() == null) {

            return ResponseEntity
                    .status(401)
                    .body("Please fill all required fields");
        }

        // 2. Check email uniqueness
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity
                    .status(422)
                    .body("Email already taken");
        }

        // 3. Create user (role NOT from client)
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("ROLE_USER");

        userRepository.save(user);

        // 4. Success response
        return ResponseEntity
                .status(201)
                .body("User created successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request,
                                   HttpServletResponse response) {

        // 1. Find user
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        // 2. Verify password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // 3. Generate JWT token
        String token = jwtProvider.generateToken(user.getId(), user.getRole(), user.getName());

        // 4. Create cookies
        ResponseCookie jwtCookie = ResponseCookie.from("access_token", token)
                .httpOnly(true)        // JS cannot access
                .secure(false)         // true if HTTPS
                .path("/")             // cookie sent to all endpoints
                .maxAge(15 * 60)       // 15 minutes
                .sameSite("Lax")
                .build();

        ResponseCookie usernameCookie = ResponseCookie.from("username", user.getName())
                .httpOnly(false)       // optional: JS can read username
                .secure(false)
                .path("/")
                .maxAge(15 * 60)
                .sameSite("Lax")
                .build();

        // 5. Add cookies to response
        response.addHeader("Set-Cookie", jwtCookie.toString());
        response.addHeader("Set-Cookie", usernameCookie.toString());

        // 6. Optional: return minimal JSON
        return ResponseEntity.ok(Map.of(
                "message", "Login successful",
                "role", user.getRole()
        ));
    }

}

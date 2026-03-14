package com.Lokesh.restaurantengine.user.security;

import io.jsonwebtoken.Claims;
import jakarta.servlet.*;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    private final JwtProvider jwtProvider;

    public JwtAuthenticationFilter(JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        String token = extractToken(request);

        if (token != null) {
            try {
                Claims claims = jwtProvider.getClaims(token);

                String email = claims.get("name", String.class);
                String role = claims.get("role", String.class);

                if (email != null && role != null) {
                    UsernamePasswordAuthenticationToken auth =
                            new UsernamePasswordAuthenticationToken(
                                    email,
                                    null,
                                    List.of(new SimpleGrantedAuthority("ROLE_" + role.toUpperCase()))
                            );

                    SecurityContextHolder.getContext().setAuthentication(auth);
                    log.debug("JWT valid - set authentication for user='{}' role='{}' path='{}'", email, role, request.getRequestURI());
                } else {
                    log.debug("JWT missing expected claims (name/role) - path='{}'", request.getRequestURI());
                }
            } catch (Exception ex) {
                // invalid token -> do not set authentication
                log.debug("JWT validation failed for path='{}': {}", request.getRequestURI(), ex.getMessage());
            }
        } else {
            log.debug("No JWT token found for path='{}'", request.getRequestURI());
        }

        filterChain.doFilter(request, response);
    }

    private String extractToken(HttpServletRequest request) {
        // 1. Try Authorization header (Bearer ...)
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            log.debug("Found token in Authorization header for path='{}'", request.getRequestURI());
            return header.substring(7);
        }

        // 2. Try cookie named access_token
        if (request.getCookies() != null) {
            for (Cookie c : request.getCookies()) {
                if ("access_token".equals(c.getName())) {
                    String value = c.getValue();
                    if (value != null && !value.trim().isEmpty()) {
                        log.debug("Found token in cookie 'access_token' for path='{}'", request.getRequestURI());
                        return value;
                    }
                }
            }
        }

        return null;
    }
}

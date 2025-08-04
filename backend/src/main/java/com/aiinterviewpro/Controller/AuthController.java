package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.AuthResponseDto;
import com.aiinterviewpro.DTO.LoginRequestDto;
import com.aiinterviewpro.DTO.RegisterRequestDto;
import com.aiinterviewpro.Security.JwtUtil;
import com.aiinterviewpro.Service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;
    private final JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDto request) {
        try {
            authService.register(request);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDto request) {
        try {
            AuthResponseDto authResponseDto = authService.login(request);
            return ResponseEntity.ok(authResponseDto);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@RequestHeader("Authorization") String token) {
        try {
            if (token == null || !token.startsWith("Bearer ")) {
                return ResponseEntity.badRequest().body("No refresh token provided");
            }

            String refreshToken = token.substring(7);
            AuthResponseDto authResponseDto = authService.refreshToken(refreshToken);
            return ResponseEntity.ok(authResponseDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
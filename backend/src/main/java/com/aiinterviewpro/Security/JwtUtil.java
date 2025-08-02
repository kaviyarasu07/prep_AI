package com.aiinterviewpro.Security;

import com.aiinterviewpro.Entity.Login;
import com.aiinterviewpro.Entity.Role;
import com.aiinterviewpro.Repository.LoginRepo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
@Component
@RequiredArgsConstructor
public class JwtUtil {
    private final LoginRepo userDetailsRepository;

    @Value("${jwt.secret}")
    private String jwtSecret;

    private static final long JWT_EXPIRATION_MS = 24 * 60 * 60 * 1000;
    private static final long REFRESH_TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000L;

    private SecretKey secretKey;

    @PostConstruct
    public void init() {
        this.secretKey = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }

    private String buildToken(String userName, Role role, long durationMs) {
        return Jwts.builder()
                .subject(userName)
                .claim("role", role.getName())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + durationMs))
                .signWith(secretKey, Jwts.SIG.HS512)
                .compact();
    }

    public String extractEmail(String token) {
        return parseToken(token).getSubject();
    }

    public String generateToken(String email) { // Changed parameter from userName
        Login user = userDetailsRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found: " + email));
        return buildToken(email, user.getRole(), JWT_EXPIRATION_MS);
    }

    public String generateRefreshToken(String email) {
        Login user = userDetailsRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found: " + email));
        return buildToken(email, user.getRole(), REFRESH_TOKEN_EXPIRATION_MS);
    }

    public String extractUserName(String token) {
        return parseToken(token).getSubject();
    }

    public String extractRole(String token) {
        return parseToken(token).get("role", String.class);
    }

    public boolean isValidToken(String token) {
        try {
            Claims claims = parseToken(token);
            return !claims.getExpiration().before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    private Claims parseToken(String token) {
        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
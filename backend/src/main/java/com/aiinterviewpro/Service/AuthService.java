package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.AuthResponseDto;
import com.aiinterviewpro.DTO.LoginRequestDto;
import com.aiinterviewpro.DTO.RegisterRequestDto;
import com.aiinterviewpro.Entity.Login;
import com.aiinterviewpro.Entity.Role;
import com.aiinterviewpro.Repository.LoginRepo;
import com.aiinterviewpro.Repository.RoleRepo;
import com.aiinterviewpro.Security.JwtUtil;
import io.micrometer.common.util.StringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final LoginRepo loginRepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final RoleRepo roleRepository;



    public void register(RegisterRequestDto request) {
        if (request.getEmail() == null || request.getEmail().isBlank()) {
            throw new RuntimeException("Email must not be empty");
        }
        if (!request.getEmail().matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$")) {
            throw new RuntimeException("Invalid email format");
        }
        if (request.getPassword() == null || request.getPassword().isBlank()) {
            throw new RuntimeException("Password must not be empty");
        }
        if (request.getPassword().length() < 8) {
            throw new RuntimeException("Password must be at least 8 characters");
        }
        if (request.getRole() == null ) {
            throw new RuntimeException("Role must not be empty");
        }
        if (loginRepo.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("User already exists with this email");
        }

        Role role = roleRepository.findById(request.getRole())
                .orElseThrow(() -> new RuntimeException("Invalid role ID"));

        Login newUser = new Login();
        newUser.setEmail(request.getEmail());
        newUser.setPassword(passwordEncoder.encode(request.getPassword()));
        newUser.setRole(role);
        newUser.setUserId(request.getUserId());
        loginRepo.save(newUser);
    }

    public AuthResponseDto login(LoginRequestDto request) {
        if (StringUtils.isBlank(request.getEmail())) {
            throw new IllegalArgumentException("Email must not be empty");
        }

        if (StringUtils.isBlank(request.getPassword())) {
            throw new IllegalArgumentException("Password must not be empty");
        }

        try {
            // Authenticate user (this triggers UserDetailsService.loadUserByUsername)
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            // Fetch the Login entity only once
            Login login = loginRepo.findByEmail(request.getEmail())
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));

            // Generate JWT tokens
//            String accessToken = jwtUtil.generateToken(login.getEmail()); // Recommended: use email or userId as subject
            String refreshToken = jwtUtil.generateRefreshToken(login.getEmail());

            // Update and persist refresh token
            login.setRefreshToken(refreshToken);
            loginRepo.save(login);

            // Return response
            return new AuthResponseDto(
                    refreshToken,
                    login.getUserId(),
                    login.getRole().getName()
            );

        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Invalid email or password");
        } catch (DisabledException e) {
            throw new DisabledException("Account is disabled");
        } catch (LockedException e) {
            throw new LockedException("Account is locked");
        } catch (Exception e) {
            throw new RuntimeException("Login failed: " + e.getMessage());
        }
    }

    public AuthResponseDto refreshToken(String refreshToken) {
        if (!jwtUtil.isValidToken(refreshToken)) {
            throw new RuntimeException("Refresh token expired or invalid");
        }

        String email = jwtUtil.extractUserName(refreshToken);
        Login user = loginRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!refreshToken.equals(user.getRefreshToken())) {
            throw new RuntimeException("Invalid refresh token");
        }

        String newAccessToken = jwtUtil.generateToken(email);
        return new AuthResponseDto(newAccessToken);
    }
}
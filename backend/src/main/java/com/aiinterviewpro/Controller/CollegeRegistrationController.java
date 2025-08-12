package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.CollegeRegistrationRequest;
import com.aiinterviewpro.Service.CollegeRegistrationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/request/college")
@RequiredArgsConstructor
public class CollegeRegistrationController {

    private final CollegeRegistrationService registrationService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody CollegeRegistrationRequest request) {
        try {
            registrationService.registerCollege(request);
            return ResponseEntity.ok("Registration successful. Awaiting approval.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Validation Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Server Error: " + e.getMessage());
        }
    }
}
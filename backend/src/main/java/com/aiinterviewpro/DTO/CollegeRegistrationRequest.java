package com.aiinterviewpro.DTO;

import lombok.Data;

@Data
public class
CollegeRegistrationRequest {
    // College Details
    private String collegeName;
    private String collegeType;
    private String affiliationType;
    private String counselingCode;
    private String website;
    private String officialEmail;

    // Admin Details
    private String adminName;
    private String adminEmail;
    private String phone;

    // Login Details
    private String username;
    private String password;
}

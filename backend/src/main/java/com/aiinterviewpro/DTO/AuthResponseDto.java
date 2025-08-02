package com.aiinterviewpro.DTO;

import lombok.Data;

@Data
public class AuthResponseDto {
//    private String accessToken;
    private String refreshToken;
    private Integer userId;
    private String userRole;


    public AuthResponseDto( String refreshToken, Integer userId, String name) {
        this.refreshToken = refreshToken;
        this.userId = userId;
        this.userRole = name;
    }
    public AuthResponseDto( String refreshToken) {
        this.refreshToken = refreshToken;

    }
}
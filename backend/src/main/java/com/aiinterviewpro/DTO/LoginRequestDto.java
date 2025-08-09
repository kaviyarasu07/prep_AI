package com.aiinterviewpro.DTO;

import lombok.Data;

@Data
public class LoginRequestDto {
    private String email;
    private String password;
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
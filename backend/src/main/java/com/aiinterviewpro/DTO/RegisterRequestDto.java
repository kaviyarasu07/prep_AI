package com.aiinterviewpro.DTO;

import com.aiinterviewpro.Entity.Role;
import lombok.Data;

@Data
public class RegisterRequestDto {
    private String email;
    private String password;
    private Integer role;
    private Integer userId;
}
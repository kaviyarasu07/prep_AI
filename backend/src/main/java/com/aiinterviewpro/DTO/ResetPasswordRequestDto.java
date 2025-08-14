package com.aiinterviewpro.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ResetPasswordRequestDto {

    @NotBlank
    @Size(min = 10, message = "Password must be 10 characters long")
    @Pattern(
            regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%!&*?]).*$",
            message = "Password must contain uppercase, lowercase, number and special character"
    )
    private String newPassword;

    private  String email;

}

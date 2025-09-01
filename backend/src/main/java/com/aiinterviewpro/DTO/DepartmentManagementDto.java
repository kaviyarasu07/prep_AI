package com.aiinterviewpro.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class DepartmentManagementDto {
    @NotBlank(message = "Department name is required")
    private String departmentName;
    @NotBlank(message = "Department code is required")
    private String departmentCode;
    @NotBlank(message = "Admin name is required")
    private String departmentAdminName;
    @NotBlank(message = "Email is required")
    @Email(message = "Email format is invalid")
    private String mailId;
    private int departmentId;
    private int totalNoOfStudents;
    @NotBlank(message = "Degree type is required")
    private String degreeType;
    @NotNull(message = "College ID is required")
    private int collegeId;

}

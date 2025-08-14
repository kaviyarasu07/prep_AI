package com.aiinterviewpro.DTO;

import lombok.Data;

@Data
public class DepartmentManagementDto {
    private String departmentName;
    private String departmentCode;
    private String departmentAdminName;
    private String mailId;
    private int totalNoOfStudents;
    private String degreeType;
    private int collegeId;

}

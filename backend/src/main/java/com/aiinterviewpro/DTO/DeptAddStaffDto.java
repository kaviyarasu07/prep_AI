package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeptAddStaffDto {

    private String fullName;
    private String emailId;
    private String phoneNumber;
    private String role;
    private String department;
    private String staffId;
    private String assignedStudents;
    private String profilePhotoUrl;
}

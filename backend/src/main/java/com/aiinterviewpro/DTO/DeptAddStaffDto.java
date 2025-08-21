package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
    private List<Integer> assignedStudents;
    private String profilePhotoUrl;
}

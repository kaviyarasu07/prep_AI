package com.aiinterviewpro.DTO;

import com.aiinterviewpro.Entity.DepartmentMaster;
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
    private String designation;
    private String departmentName;
   // private String degreeType;
    private String staffId;
    private List<Integer> assignedStudents;
    private String profilePhotoUrl;



}

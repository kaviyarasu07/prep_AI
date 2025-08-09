package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data


public class DepartmentSummaryDto {
    private int id;
    private String departmentName;
    private String assignedAdmins;
    private int numberOfStudents;
    private String status;
    private int roleId;




    public DepartmentSummaryDto() {
    }

    public DepartmentSummaryDto(int id,String departmentName, String assignedAdmins,int numberOfStudents,String status) {
        this.id = id;
        this.departmentName = departmentName;
        this.assignedAdmins = assignedAdmins;
        this.numberOfStudents = numberOfStudents;
        this.status = status;


    }
}


package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data


public class DepartmentSearchDto {
    private int id;
    private String departmentName;
    private String departmentCode;
    private int totalStudents;
    private int activeStudents;
    private boolean status;


    public DepartmentSearchDto( int id,String departmentName, String departmentCode, int totalStudents, int activeStudents, boolean status) {
        this.id = id;
        this.departmentName = departmentName;
        this.departmentCode = departmentCode;
        this.status = status;
        this.totalStudents = totalStudents;
        this.activeStudents = activeStudents;
    }
}

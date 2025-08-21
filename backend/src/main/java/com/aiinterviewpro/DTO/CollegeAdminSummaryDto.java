package com.aiinterviewpro.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CollegeAdminSummaryDto {
    private int totalDepartments;
    private int totalStudents;
    private int totalDepartmentAdmins;

    public int getTotalStudents() {
        return totalStudents;
    }

    public void setTotalStudents(int totalStudents) {
        this.totalStudents = totalStudents;
    }

    public int getTotalDepartments() {
        return totalDepartments;
    }

    public void setTotalDepartments(int totalDepartments) {
        this.totalDepartments = totalDepartments;
    }

    public int getTotalDepartmentAdmins() {
        return totalDepartmentAdmins;
    }

    public void setTotalDepartmentAdmins(int totalDepartmentAdmins) {
        this.totalDepartmentAdmins = totalDepartmentAdmins;
    }


}
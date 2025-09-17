package com.aiinterviewpro.DTO;



import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data

public class RegisteredDepartmentsDto {
    private int id;
    private String departmentName;
    private String departmentCode;

    public RegisteredDepartmentsDto(int id, String departmentName, String departmentCode, int totalStudents, int activeStudents, String status, Date creationDate) {
        this.id =id;
        this.departmentName = departmentName;
        this.departmentCode = departmentCode;
        this.activeStudents = activeStudents;
        this.totalStudents = totalStudents;
        this.status = status;
        this.creationDate = creationDate;
    }

    public RegisteredDepartmentsDto(Integer id, String departmentName, String departmentCode, int totalStudents, int activeStudents, String status, LocalDateTime createdAt) {
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }


    public String getDepartmentCode() {
        return departmentCode;
    }

    public void setDepartmentCode(String departmentCode) {
        this.departmentCode = departmentCode;
    }

    public int getTotalStudents() {
        return totalStudents;
    }

    public void setTotalStudents(int totalStudents) {
        this.totalStudents = totalStudents;
    }

    private int totalStudents;

    public int getActiveStudents() {
        return activeStudents;
    }

    public void setActiveStudents(int activeStudents) {
        this.activeStudents = activeStudents;
    }

    private int activeStudents;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    private String status;

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    private Date creationDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}

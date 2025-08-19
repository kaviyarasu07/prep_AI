package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UpdateRequestDto {
    private String departmentName;
    private String departmentCode;
    private Boolean status;
    private Integer totalStudents;
    private Integer activeStudents;
    private String assignedAdmins;
}


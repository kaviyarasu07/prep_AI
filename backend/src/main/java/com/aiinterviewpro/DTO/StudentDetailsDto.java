package com.aiinterviewpro.DTO;

import lombok.Data;

@Data
public class StudentDetailsDto {

    private Integer studentId;
    private String studentName;

    private String rollNumber;

    private String year;

    private String current_mentor;

}

package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeptStudentTableDto {
    private String rollNumber;
    private String studentName;
    private String yearOfStudy;
    // private String mentorName;
    private Double cgpa;
    //private int mockInterviewsCompleted;
    // private int assessmentsCompleted;
    private String status;
}

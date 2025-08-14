package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeptNewStudentDto {

    private String studentName;
    private String rollNumber;       // Student ID / Roll Number
    private String email;
    private String phoneNumber;
    private String yearOfStudy;
    //private String mentorAssignment;
    private Double cgpa;
    //private String profilePhotoUrl;  // Optional
}

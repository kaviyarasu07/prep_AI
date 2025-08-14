package com.aiinterviewpro.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "tb_student_details")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer studentId;

    @Column(name = "student_name")
    private String studentName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "gender")
    private String gender;

    @Column(name = "dob")
    private LocalDate dob;

    @Column(name = "address")
    private String address;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private DepartmentMaster department;

    @ManyToOne
    @JoinColumn(name = "college_id")
    private College college;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "last_updated_at")
    private LocalDateTime lastUpdatedAt = LocalDateTime.now();

    @Column(name = "assigned_to")
    private String assignedTo;

    @Column(name = "is_assigned")
    private Boolean isAssigned = false;

    @Column(name = "roll_number")
    private String rollNumber;

    @Column(name = "year_of_study")
    private String yearOfStudy;

    @Column(name = "cgpa")
    private Double cgpa;

    @Column(name="profile_photo")
    private  String profilePhoto;


}

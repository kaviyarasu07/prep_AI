package com.aiinterviewpro.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "tb_department_master")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DepartmentMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "degree_type", nullable = false)
    private String degreeType;

    @Column(name = "department_name", nullable = false)
    private String departmentName;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();


    @Column(name = "department_code", nullable = false, unique = true)
    private String departmentCode;



}

package com.aiinterviewpro.Entity;

import com.aiinterviewpro.Enum.AffiliationType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "tb_college")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class College {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String collegeName;

    @Column(name = "code")
    private String counselingCode;

    @ManyToOne
    @JoinColumn(name = "college_type")
    private CollegeType collegeType;

    @Column(name = "degree_type")
    private String degreeType;

    @Enumerated(EnumType.STRING)
    @Column(name = "affiliated_to")
    private AffiliationType affiliationType;

    @Column(name = "affiliated_university")
    private String affiliatedUniversity;

    @Column(name = "status")
    private String status;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;


    @Column(name = "state")
    private String state;

    @Column(name = "pincode")
    private String pincode;

    @Column(name = "contact_email")
    private String email;

    @Column(name = "website")
    private String website;

    @Column(name = "contact_phone")
    private String contactPhone;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();
}

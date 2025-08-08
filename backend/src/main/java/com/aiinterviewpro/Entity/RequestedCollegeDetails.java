package com.aiinterviewpro.Entity;

import com.aiinterviewpro.Enum.AffiliationType;
import com.aiinterviewpro.Enum.CollegeType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "tb_requested_college_details")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestedCollegeDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "college_name")
    private String collegeName;

    @Enumerated(EnumType.STRING)
    @Column(name = "college_type")
    private CollegeType collegeType;

    @Enumerated(EnumType.STRING)
    @Column(name = "affiliation_type")
    private AffiliationType affiliationType;

    @Column(name = "counseling_code")
    private String counselingCode;

    @Column(name = "website")
    private String website;

    @Column(name = "official_email")
    private String officialEmail;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "status")
    private String status = "PENDING";

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

}

package com.aiinterviewpro.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "tb_staff_details")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StaffDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "college_id")
    private College college;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @Column(name = "staff_name")
    private String staffName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "last_updated_at")
    private LocalDateTime lastUpdatedAt = LocalDateTime.now();
}

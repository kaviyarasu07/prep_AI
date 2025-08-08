package com.aiinterviewpro.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "tb_request_clg_login")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestCollegeLogin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "role")
    private String role = "COLLEGE_ADMIN";

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "created_time")
    private LocalDateTime createdTime = LocalDateTime.now();

    @Column(name = "last_Login_time")
    private LocalDateTime lastLoginTime=null;

    @OneToOne
    @JoinColumn(name = "admin_id")
    private RequestedCollegeAdmin admin;

}

//package com.aiinterviewpro.Entity;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "tb_requested_college_admin")
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class RequestedCollegeAdmin {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    @ManyToOne
//    @JoinColumn(name = "college_id")
//    private RequestedCollegeDetails collegeId;
//
//    @Column(name = "full_name", nullable = false)
//    private String fullName;
//
//    @Column(name = "email", unique = true, nullable = false)
//    private String email;
//
//    @Column(name = "phone", unique = true)
//    private String phone;
//
//    @Column(name = "role")
//    private String role = "COLLEGE_ADMIN";
//
//    @Column(name = "is_active")
//    private Boolean isActive = true;
//
//    @Column(name = "created_at")
//    private LocalDateTime createdAt = LocalDateTime.now();
//
//    @Column(name = "updated_at")
//    private LocalDateTime updatedAt = LocalDateTime.now();
//
//    @OneToOne(mappedBy = "admin", cascade = CascadeType.ALL)
//    private RequestCollegeLogin login;
//}

package com.aiinterviewpro.Entity;

import com.aiinterviewpro.Enum.Designation;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

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



    @Enumerated(EnumType.STRING) // Stores as "PROFESSOR", not 0, 1, 2...
    private Designation designation;


    @Column(name = "profile_photo")
    private String profilePhoto;  // path or URL

    @Column(name = "staff_code", unique = true)
    private String staffCode;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "last_updated_at")
    private LocalDateTime lastUpdatedAt = LocalDateTime.now();

    // 🔗 Many-to-many with students
    @ManyToMany
    @JoinTable(
            name = "tb_staff_students",   // junction table
            joinColumns = @JoinColumn(name = "staff_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    private Set<StudentDetails> students = new HashSet<>();
}

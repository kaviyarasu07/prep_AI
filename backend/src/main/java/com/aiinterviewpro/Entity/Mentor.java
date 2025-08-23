package com.aiinterviewpro.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "tb_mentor")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Mentor
{

//    @Id
//    @GeneratedValue(generator = "UUID")
//    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
//    @JdbcTypeCode(SqlTypes.VARCHAR)
//    @Column(name = "id", nullable = false, updatable = false, length = 36)
//    private UUID id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "total_students")
    private int total_no_Students;

    @Column(name = "avg_cgpa_of_students")
    private double avg_cpa_of_students;

    @Column(name = "assessment_mentioned")
    private int assessment_mentioned;

    @Column(name = "mock_interview_conducted")
    private int mock_interview_Conducted;

    @OneToMany(mappedBy = "mentor")
    private List<StudentDetails> students;


}

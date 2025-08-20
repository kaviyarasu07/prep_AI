package com.aiinterviewpro.DTO;

import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MentorDto {

    @Id
    private Integer id;

    private String email;

    private String name;

    private int total_no_Students;

    private int avg_cpa_of_students;

    private int assessment_mentioned;

    private int mock_interview_Conducted;


}

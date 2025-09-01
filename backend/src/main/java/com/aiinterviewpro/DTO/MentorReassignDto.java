package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MentorReassignDto {

    private Integer mentorId;
    private List <Integer> studentIds;

}

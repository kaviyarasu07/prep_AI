package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaRequestCollegeDTO {
    private Integer id;
    private String collegeName;
    private String type;
    private String universityType;
    private String counselingCode;
    private LocalDate dateRequested;
    private String status;
    private List<String> actions;


}

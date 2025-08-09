package com.aiinterviewpro.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaCollegeSummaryDto {
    private long totalColleges;

    private long engineeringCount;
    private long artsCount;

}
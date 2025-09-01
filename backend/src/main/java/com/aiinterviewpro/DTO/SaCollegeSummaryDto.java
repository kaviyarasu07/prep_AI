package com.aiinterviewpro.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaCollegeSummaryDto {
    private long totalCollegesOnboarded;
    private long totalRegistrationRequests;
    private long engineeringCollegesCount;
    private long artsCollegesCount;

}
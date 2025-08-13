package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.SaCollegeSummaryDto;
import com.aiinterviewpro.Repository.CollegeRepo;
import org.springframework.stereotype.Service;

@Service
public class SaCollegeService {

    private final CollegeRepo collegeRepo;

    public SaCollegeService(CollegeRepo collegeRepo) {
        this.collegeRepo = collegeRepo;
    }

    public SaCollegeSummaryDto getCollegeSummary() {
        long totalRequests = collegeRepo.getTotalRequests(); // All requests
        long totalOnboarded = collegeRepo.getTotalOnboarded(); // Approved only
        long engineeringCount = collegeRepo.getEngineeringCount(); // Approved + Engineering
        long artsCount = collegeRepo.getArtsCount(); // Approved + Arts

        return new SaCollegeSummaryDto(totalOnboarded, totalRequests, engineeringCount, artsCount);
    }
    }




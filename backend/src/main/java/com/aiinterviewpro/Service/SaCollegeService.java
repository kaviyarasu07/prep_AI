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
        long totalRequests = collegeRepo.getTotalRequests();
        long totalOnboarded = collegeRepo.getTotalOnboarded();
        long engineeringCount = collegeRepo.getEngineeringCount();
        long artsCount = collegeRepo.getArtsCount();

        return new SaCollegeSummaryDto(totalOnboarded, totalRequests, engineeringCount, artsCount);
    }
    }




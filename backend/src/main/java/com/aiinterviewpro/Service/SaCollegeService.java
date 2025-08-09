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
        long totalColleges = collegeRepo.getTotalColleges();
        long engineeringCount = collegeRepo.countByType("Engineering");
        long artsCount = collegeRepo.countByType("Arts");



        return new SaCollegeSummaryDto(totalColleges, engineeringCount, artsCount);
    }
        }



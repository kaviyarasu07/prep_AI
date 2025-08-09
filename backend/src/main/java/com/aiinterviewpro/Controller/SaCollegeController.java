package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.SaCollegeSummaryDto;
import com.aiinterviewpro.Service.SaCollegeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/super/admin")
public class SaCollegeController {

    private final SaCollegeService saCollegeService;

    public SaCollegeController( SaCollegeService saCollegeService){
        this.saCollegeService=saCollegeService;
    }

    @GetMapping ("dashboard/summary")
    public SaCollegeSummaryDto getDashboardSummary(){
        return saCollegeService.getCollegeSummary();
    }

}

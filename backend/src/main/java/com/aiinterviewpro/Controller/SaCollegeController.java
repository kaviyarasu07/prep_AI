package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.SaCollegeSummaryDto;
import com.aiinterviewpro.Service.SaCollegeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/sa/super/admin")
public class SaCollegeController {

    private final SaCollegeService saCollegeService;

    public SaCollegeController( SaCollegeService saCollegeService){
        this.saCollegeService=saCollegeService;
    }
     //summary
    @GetMapping("/summary")
    public ResponseEntity<?> getCollegeSummary() {
        try {
            SaCollegeSummaryDto summary = saCollegeService.getCollegeSummary();
            if (summary == null) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No summary data found");
            }
            return ResponseEntity.ok(summary);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Unexpected error while fetching summary: " + e.getMessage());
        }
    }
}

package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.SaCollegeSummaryDto;
import com.aiinterviewpro.Service.SaCollegeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/summary")
    public ResponseEntity<?> getCollegeSummary() {
        try {
            SaCollegeSummaryDto summary = saCollegeService.getCollegeSummary();

            if (summary == null) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT)
                        .body("No summary data found");
            }

            return ResponseEntity.ok(summary);

        } catch (org.springframework.web.client.HttpClientErrorException.Forbidden e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Access Denied: You are not authorized to view this resource. Check your URL or permissions.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Unexpected error while fetching summary: " + e.getMessage());
        }
    }

}

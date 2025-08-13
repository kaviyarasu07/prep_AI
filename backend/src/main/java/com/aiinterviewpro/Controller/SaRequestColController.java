package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.SaRequestCollegeDTO;
import com.aiinterviewpro.Service.SaRequestedColService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/request")
public class SaRequestColController {

    private final SaRequestedColService saRequestedColService;

    public SaRequestColController(SaRequestedColService service) {
        this.saRequestedColService = service;
    }

    // Fetch all requested colleges
    @GetMapping("/college")
    public ResponseEntity<?> fetchAllRequests() {
        try {
            List<SaRequestCollegeDTO> colleges = saRequestedColService.getRequestedColleges();

            if (colleges == null || colleges.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT)
                        .body("No requested colleges found");
            }

            return ResponseEntity.ok(colleges);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching requested colleges: " + e.getMessage());
        }
    }


    // Update college status
    @PutMapping("col/{id}/status")
    public ResponseEntity<String> updateCollegeStatus(
            @PathVariable Integer id,
            @RequestParam String status) {

        boolean updated = saRequestedColService.updateCollegeStatus(id, status);
        if (updated) {
            return ResponseEntity.ok("College status updated to: " + status);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("College not found");
    }
}

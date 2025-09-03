package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.DeptDashBoardDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Service.DeptDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/dept")
public class DeptDashboardController {

    @Autowired
    private DeptDashboardService deptDashboardService;

    @GetMapping("/count")

    public ResponseEntity<?> getDeptDashboard(@RequestParam String deptName) {
        try {
            DeptDashBoardDto dashboard = deptDashboardService.getDeptDashboard(deptName);
            return ResponseEntity.ok(dashboard);
        } catch (Exception e) {
            // exception log panna
            e.printStackTrace();

            // error response
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Something went wrong while fetching dashboard");
            errorResponse.put("details", e.getMessage());

            return ResponseEntity.status(500).body(errorResponse);
        }
    }
}

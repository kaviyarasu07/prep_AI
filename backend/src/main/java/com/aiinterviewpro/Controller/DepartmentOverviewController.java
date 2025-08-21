package com.aiinterviewpro.Controller;

import com.aiinterviewpro.Service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/department")
// Department Information in Mentor Overview
public class DepartmentOverviewController {

    @Autowired
    DepartmentService departmentService;

    @GetMapping("/overview/{departmentId}")
    public ResponseEntity<?> getDepartmentOverview(@PathVariable Integer departmentId) {
        return ResponseEntity.ok(departmentService.getDepartmentOverview(departmentId));
    }

}

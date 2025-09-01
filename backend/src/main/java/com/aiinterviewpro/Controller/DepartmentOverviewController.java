package com.aiinterviewpro.Controller;

import com.aiinterviewpro.Service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/department")
// Department Information in Mentor Overview
public class DepartmentOverviewController {

    @Autowired
    DepartmentService departmentService;

    @GetMapping("/overview/{departmentId}")
    public ResponseEntity<?> getDepartmentOverview(@PathVariable Integer departmentId) {

        Map<String, Object> overview = departmentService.getDepartmentOverview(departmentId);
        if (overview == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "Department not found with id: " + departmentId));
        }
        return ResponseEntity.ok(overview);
    }

}

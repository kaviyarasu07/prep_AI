package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.DepartmentSummaryDto;
import com.aiinterviewpro.Service.DepartmentSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value="/search")

public class DepartmentSearchController {
    @Autowired
    private DepartmentSearchService searchService;

    @GetMapping("/summary")
    public ResponseEntity<?> searchDepartments(
            @RequestParam(required = false) String departmentName,
            @RequestParam(required = false) String assignedAdmins,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Integer numberOfStudents
    ) {
        List<DepartmentSummaryDto> results = searchService.searchDepartmentSummary(
                departmentName, assignedAdmins, status, numberOfStudents
        );

        if (results.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "No matches found"));
        }

        return ResponseEntity.ok(results);
    }
}

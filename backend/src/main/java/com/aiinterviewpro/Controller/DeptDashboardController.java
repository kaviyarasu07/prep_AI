package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.DeptDashBoardDto;
import com.aiinterviewpro.Service.DeptDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dept")
public class DeptDashboardController {

    @Autowired
    private DeptDashboardService deptDashboardService;

    @GetMapping("/total-students/{departmentName}")
    public ResponseEntity<Long> getTotalStudents(@PathVariable String departmentName) {
        Long count = deptDashboardService.getTotalStudents(departmentName);
        return ResponseEntity.ok(count);
    }
}

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
    public ResponseEntity<Map<String, Long>> getStudentCount(@RequestParam String deptName) {
        long count = deptDashboardService.getStudentCountByDept(deptName);

        Map<String, Long> response = new HashMap<>();
        response.put("totalStudents", count);

        return ResponseEntity.ok(response);
    }


}

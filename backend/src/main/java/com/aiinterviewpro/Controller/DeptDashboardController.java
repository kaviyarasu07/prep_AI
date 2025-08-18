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

    // Example: GET http://localhost:8080/students/byYear?year=2
    @GetMapping("/byYear")
    public ResponseEntity<List<StudentDetails>> getStudentsByYear(@RequestParam String year) {
        List<StudentDetails> students = deptDashboardService.getStudentsByYear(year);
        return ResponseEntity.ok(students);
    }
}

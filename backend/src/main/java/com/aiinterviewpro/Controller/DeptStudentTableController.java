package com.aiinterviewpro.Controller;


import com.aiinterviewpro.DTO.DeptStudentTableDto;
import com.aiinterviewpro.Service.DeptStudentTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/department/student")
public class DeptStudentTableController {

    @Autowired
    private DeptStudentTableService deptStudentTableService;

    @GetMapping("/table")
    public ResponseEntity<List<DeptStudentTableDto>> getStudents() {
        return ResponseEntity.ok(deptStudentTableService.getAllStudents());
    }


    @GetMapping("/filter")
    public ResponseEntity<List<DeptStudentTableDto>> getFilteredStudents(
            @RequestParam(required = false) String year,
            @RequestParam(required = false) String mentor,
            @RequestParam(required = false) String status) {

        return ResponseEntity.ok(deptStudentTableService.getFilteredStudents(year, mentor, status));
    }
}

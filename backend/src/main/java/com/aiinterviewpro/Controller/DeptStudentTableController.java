package com.aiinterviewpro.Controller;


import com.aiinterviewpro.DTO.DeptStudentTableDto;
import com.aiinterviewpro.Service.DeptStudentTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/department/student")
public class DeptStudentTableController {

    @Autowired
    private DeptStudentTableService deptStudentTableService;

    //get all
    @GetMapping("/table")
    public ResponseEntity<List<DeptStudentTableDto>> getStudents() {
        return ResponseEntity.ok(deptStudentTableService.getAllStudents());
    }


    //  Dynamic Department Students
    @GetMapping("/by-department")
    public ResponseEntity<List<DeptStudentTableDto>> getStudentsByDepartment(
            @RequestParam String departmentCode) {
        List<DeptStudentTableDto> students = deptStudentTableService.getStudentsByDepartment(departmentCode);
        return ResponseEntity.ok(students);
    }
    // filter by department + year + mentor + status
    @GetMapping("/filter")
    public ResponseEntity<List<DeptStudentTableDto>> getFilteredStudents(
            @RequestParam String departmentCode,   // now required
            @RequestParam(required = false) String year,
            @RequestParam(required = false) String mentor,
            @RequestParam(required = false) String status) {

        return ResponseEntity.ok(
                deptStudentTableService.getFilteredStudents(departmentCode, year, mentor, status)
        );
    }

    //get student id and student name

    @GetMapping("/id-name")
    public List<DeptStudentTableDto> getStudentIdAndName() {
        return deptStudentTableService.getAllStudentIdAndName();
    }
}

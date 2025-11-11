package com.aiinterviewpro.Controller;


import com.aiinterviewpro.DTO.DeptNewStudentDto;
import com.aiinterviewpro.Entity.DepartmentMaster;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Service.DeptNewStudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/add")
public class DeptNewStudentController {

    @Autowired
    private DeptNewStudentService deptNewStudentService;


    // ===== Add new student =====
    @PostMapping("/student")
    public ResponseEntity<?> createStudent(@RequestBody DeptNewStudentDto dto) {
        try {
            // Save student via service
            DeptNewStudentDto responseDto = deptNewStudentService.saveStudent(dto);
            return ResponseEntity.ok(responseDto);
        } catch (RuntimeException ex) {
            // Return 400 if validation or department error occurs
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    // ===== Get all departments =====
    @GetMapping("/names")
    public ResponseEntity<List<DepartmentMaster>> getAllDepartments() {
        // Service must have getAllDepartments() method
        List<DepartmentMaster> departments = deptNewStudentService.getAllDepartments();
        return ResponseEntity.ok(departments);
    }
}



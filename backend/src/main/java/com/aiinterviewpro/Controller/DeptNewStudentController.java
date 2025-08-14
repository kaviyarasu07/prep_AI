package com.aiinterviewpro.Controller;


import com.aiinterviewpro.DTO.DeptNewStudentDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Service.DeptNewStudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/add")
public class DeptNewStudentController {

    @Autowired
    private DeptNewStudentService deptNewStudentService;

    @PostMapping("/student")
    public ResponseEntity<?> createStudent(@RequestBody DeptNewStudentDto dto) {
        try {
            // Service already returns DTO after saving
            DeptNewStudentDto responseDto = deptNewStudentService.saveStudent(dto);
            return ResponseEntity.ok(responseDto);

        } catch (RuntimeException ex) {
            // This will be caught by GlobalExceptionHandler if you remove try-catch
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

}


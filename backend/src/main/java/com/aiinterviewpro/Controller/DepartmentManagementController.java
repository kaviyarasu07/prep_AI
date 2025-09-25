package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.DepartmentManagementDto;
import com.aiinterviewpro.DTO.ResetPasswordRequestDto;
import com.aiinterviewpro.Service.DepartmentManagementService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.security.Principal;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/ca/addDepartment")

public class DepartmentManagementController {
    @Autowired
    private DepartmentManagementService departmentservice;

    @PostMapping("/create")
    public ResponseEntity<DepartmentManagementDto> createDepartment(@Valid @RequestBody DepartmentManagementDto dto) {
        DepartmentManagementDto savedDto = departmentservice.create(dto);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedDto.getDepartmentId())
                .toUri();
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDto);
    }


    @GetMapping("/count")
    public ResponseEntity<Long> getStudentCount(@RequestParam String departmentName,int collegeId) {
        long count = departmentservice.getStudentCountbyDepartmentName(departmentName,collegeId);
        return ResponseEntity.ok(count);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequestDto request, Principal principal) {
        try {
            departmentservice.resetPassword(request.getNewPassword(), principal);
            return ResponseEntity.ok("Password reset successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}

package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.DepartmentManagementDto;
import com.aiinterviewpro.DTO.ResetPasswordRequestDto;
import com.aiinterviewpro.Service.DepartmentManagementService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.security.Principal;

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

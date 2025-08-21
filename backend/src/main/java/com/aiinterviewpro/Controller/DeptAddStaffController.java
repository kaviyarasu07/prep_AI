package com.aiinterviewpro.Controller;


import com.aiinterviewpro.DTO.DeptAddStaffDto;
import com.aiinterviewpro.Service.DeptAddStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/newStaff")
public class DeptAddStaffController {


    @Autowired
    private DeptAddStaffService deptAddStaffService;
    @PostMapping("/create")
    public ResponseEntity<?> createStaff(@RequestBody DeptAddStaffDto dto) {
        try {
            deptAddStaffService.createStaff(dto);
            return ResponseEntity.ok("✅ Staff created successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error creating staff: " + e.getMessage());
        }
    }
}

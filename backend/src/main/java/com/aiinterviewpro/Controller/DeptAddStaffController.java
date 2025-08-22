package com.aiinterviewpro.Controller;


import com.aiinterviewpro.DTO.DeptAddStaffDto;
import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Service.DeptAddStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/newStaff")
public class DeptAddStaffController {


    @Autowired
    private DeptAddStaffService deptAddStaffService;

    @PostMapping("/create")
    public ResponseEntity<?> createStaff(@RequestBody DeptAddStaffDto dto) {
        try {
            StaffDetails savedStaff = deptAddStaffService.createStaff(dto);
            return ResponseEntity.ok(savedStaff);

        } catch (RuntimeException ex) {
            // business / validation errors
            return ResponseEntity
                    .badRequest()
                    .body("Error: " + ex.getMessage());

        } catch (Exception ex) {
            // unknown errors
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Unexpected error occurred: " + ex.getMessage());
        }
    }

}

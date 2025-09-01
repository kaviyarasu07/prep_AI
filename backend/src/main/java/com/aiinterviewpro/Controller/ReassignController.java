package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.StudentDetailsDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Service.StudentDetailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/mentor")
@AllArgsConstructor(onConstructor_ = {@Autowired})
public class ReassignController{

    @Autowired
    StudentDetailService studentDetailService;

    @GetMapping("/by-mentor/{mentorId}")
    public ResponseEntity<List<StudentDetailsDto>> getStudentsByMentor(@PathVariable Integer mentorId) {
        List<StudentDetailsDto> students = studentDetailService.getStudentsByMentor(mentorId);
        if (students.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(students);
    }



}

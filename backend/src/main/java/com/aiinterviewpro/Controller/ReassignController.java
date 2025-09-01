package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.StudentDetailsDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.DTO.MentorReassignDto;
import com.aiinterviewpro.Service.StudentDetailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/mentor/reassign")
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

    // To assign the list of students

    @PutMapping("/update")
    public ResponseEntity<?> reassignMentor(@RequestBody MentorReassignDto request) {
        try {
            studentDetailService.reassignMentor(request);
            return ResponseEntity.ok(Map.of("message", "Mentor reassigned successfully", "mentorId", request.getMentorId(), "studentIds", request.getStudentIds()));
        } catch (RuntimeException ex)
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", ex.getMessage()));
        }
    }




}

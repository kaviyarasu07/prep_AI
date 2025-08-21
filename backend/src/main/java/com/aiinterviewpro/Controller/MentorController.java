package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.MentorDto;
import com.aiinterviewpro.Entity.Mentor;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Service.MentorService;
import com.aiinterviewpro.validator.MentorValidator;
import com.aiinterviewpro.validator.ValidationResult;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/mentor")
@AllArgsConstructor(onConstructor_ = {@Autowired})
public class MentorController {

    private final Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    MentorValidator mentorValidator;
    @Autowired
    MentorService mentorService;


    //@ApiOperation(value = " Create mentor.", response = Response.class)
    @PostMapping(value = "/create", produces = "application/json")
    public ResponseEntity<?> createMentor(@RequestBody MentorDto mentorDto, @RequestHeader HttpHeaders headers) throws Exception {
        logger.info("start to add mentor {}", LocalDateTime.now());
        // Login loggedInMentor = null;
        // jwt process
        ValidationResult validationResult = mentorValidator.validateMentor(mentorDto);
        try {
            mentorService.create(mentorDto);
            return ResponseEntity.ok("Mentor created successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    //get All the mentor details.
    // To get the number of total mentors.
    @GetMapping(value = "/all", produces = "application/json")
    public ResponseEntity<?> getAllMentors() {
        logger.info("Fetching all mentors {}", LocalDateTime.now());
        try {
            List<MentorDto> mentorDtoList = mentorService.getAllMentors();
            // Validate each mentor
            for (MentorDto mentorDto : mentorDtoList) {
                ValidationResult validationResult = mentorValidator.validateMentor(mentorDto);
                if (!validationResult.isValid()) {
                    return ResponseEntity.badRequest().body(validationResult.getErrors());
                }
            }
            Map<String, Object> response = new HashMap<>();
            response.put("Total Mentors", mentorDtoList.size());
            response.put("mentors", mentorDtoList);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Students without mentor
    @GetMapping("/students-without-mentor")
    public ResponseEntity<?> getStudentsWithoutMentor() {
        logger.info("Fetching all Students without mentors {}", LocalDateTime.now());
        List<StudentDetails> studentDetails = mentorService.getStudentsWithoutMentor();
        Map<String, Integer> response = new HashMap<>();
        response.put("count", studentDetails.size());
        return ResponseEntity.ok(response);
    }

    // Average students per mentor
    @GetMapping("/average-students")
    public ResponseEntity<Double> getAverageStudentsPerMentor() {
        return ResponseEntity.ok(mentorService.getAverageStudentsPerMentor());
    }

    //  Top performing mentor
    @GetMapping("/top-performing")
    public ResponseEntity<Mentor> getTopPerformingMentor() {
        Mentor mentor = mentorService.getTopPerformingMentor();
        if (mentor == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(mentor);
    }


}

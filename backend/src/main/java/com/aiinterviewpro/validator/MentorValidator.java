package com.aiinterviewpro.validator;

import com.aiinterviewpro.DTO.MentorDto;
import com.aiinterviewpro.Entity.Mentor;
import com.aiinterviewpro.Repository.MentorRepo;
import com.aiinterviewpro.Service.MessagePropertyService;
import com.aiinterviewpro.Util.ValidationUtil;
import com.aiinterviewpro.controlleradvice.ObjectInvalidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MentorValidator {

    @Autowired
    private final MessagePropertyService messagePropertyService;

    @Autowired
    private MentorRepo mentorRepo;

    // Constructor
    public MentorValidator(MessagePropertyService messagePropertyService) {
        this.messagePropertyService = messagePropertyService;
    }

    public ValidationResult validateMentor(MentorDto mentorDto) {
        List<String> errors = new ArrayList<>();
        ValidationResult result = new ValidationResult();


        // Validate for the mentor name
        if (ValidationUtil.isNullOrEmpty(mentorDto.getName())) {
            errors.add(messagePropertyService.getMessage("mentor.name.required"));
        } else if (mentorDto.getName().length() < 2) {
            errors.add(messagePropertyService.getMessage("mentor.name.tooShort"));
        }


        // Validate Total Students (must be >= 0)
        if (mentorDto.getTotal_no_Students() < 0) {
            errors.add(messagePropertyService.getMessage("mentor.totalStudents.invalid"));
        }

        // Validate Avg CGPA of Students (should be between 0 and 10)
        if (mentorDto.getAvg_cpa_of_students() < 0 || mentorDto.getAvg_cpa_of_students() > 10) {
            errors.add(messagePropertyService.getMessage("mentor.avgCgpa.invalid"));
        }

        // Validate Assessment Mentioned (should be >= 0)
        if (mentorDto.getAssessment_mentioned() < 0) {
            errors.add(messagePropertyService.getMessage("mentor.assessmentMentioned.invalid"));
        }

        // Validate Name
        if (ValidationUtil.isNullOrEmpty(mentorDto.getName())) {
            errors.add(messagePropertyService.getMessage("mentor.name.required"));
        } else if (mentorDto.getName().length() < 2) {
            errors.add(messagePropertyService.getMessage("mentor.name.tooShort"));
        }

      // Validate Mock Interviews Conducted (should be >= 0)
        if (mentorDto.getMock_interview_Conducted() < 0) {
            errors.add(messagePropertyService.getMessage("mentor.mockInterview.invalid"));
        }

         // If any errors exist, throw exception
        if (!errors.isEmpty()) {
            String errorMessage = String.join(", ", errors);
            throw new ObjectInvalidException(errorMessage);
        }

        // Map DTO to Entity if valid
        Mentor mentor = new Mentor();
        mentor.setEmail(mentorDto.getEmail());
        mentor.setTotal_no_Students(mentorDto.getTotal_no_Students());
        mentor.setAvg_cpa_of_students(mentorDto.getAvg_cpa_of_students());
        mentor.setAssessment_mentioned(mentorDto.getAssessment_mentioned());
        mentor.setMock_interview_Conducted(mentorDto.getMock_interview_Conducted());
        result.setObject(mentor);
        return result;


    }
}
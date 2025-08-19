package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.MentorDto;
import com.aiinterviewpro.Entity.Mentor;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.MentorRepo;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MentorService {

    @Autowired
    MentorRepo mentorRepo;
    @Autowired
    StudentDetailsRepo studentDetailsRepo;

    public Mentor create(MentorDto mentorDto) {
        Mentor mentor = new Mentor();
        mentor.setEmail(mentorDto.getEmail());
        mentor.setTotal_no_Students(mentorDto.getTotal_no_Students());
        mentor.setAvg_cpa_of_students(mentorDto.getAvg_cpa_of_students());
        mentor.setAssessment_mentioned(mentorDto.getAssessment_mentioned());
        mentor.setMock_interview_Conducted(mentorDto.getMock_interview_Conducted());

        return mentorRepo.save(mentor);
    }


    public List<MentorDto> getAllMentors() {
        List<Mentor> mentors = mentorRepo.findAll();
        return mentors.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    private MentorDto convertToDto(Mentor mentor) {
        MentorDto dto = new MentorDto();
        dto.setId(mentor.getId());
        dto.setEmail(mentor.getEmail());
        dto.setTotal_no_Students(mentor.getTotal_no_Students());
        dto.setAvg_cpa_of_students(mentor.getTotal_no_Students());
        dto.setAssessment_mentioned(mentor.getAssessment_mentioned());
        dto.setMock_interview_Conducted(mentor.getMock_interview_Conducted());
        return dto;
    }

    // Students without mentor
    public List<StudentDetails> getStudentsWithoutMentor() {
        return studentDetailsRepo.findStudentsWithoutMentor();
    }

    // Average students per mentor
    public double getAverageStudentsPerMentor() {
        List<Object[]> counts = studentDetailsRepo.findStudentCountsPerMentor();
        if (counts.isEmpty()) return 0.0;

        double total = counts.stream().mapToDouble(row -> ((Long) row[1]).doubleValue()).sum();
        return total / counts.size();
    }

    //  Top performing mentor
    public Mentor getTopPerformingMentor() {
        List<Mentor> mentors = mentorRepo.findMentorsByPerformanceDesc();
        return mentors.isEmpty() ? null : mentors.get(0);
    }


}

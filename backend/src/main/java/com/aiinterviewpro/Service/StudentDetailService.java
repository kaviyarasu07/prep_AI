package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.MentorReassignDto;
import com.aiinterviewpro.DTO.StudentDetailsDto;
import com.aiinterviewpro.Entity.Mentor;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.MentorRepo;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentDetailService {

    @Autowired
    StudentDetailsRepo studentDetailsRepo;

    @Autowired
    MentorRepo mentorRepo;

    public List<StudentDetailsDto> getStudentsByMentor(Integer mentorId)
    {
        List<StudentDetails> students = studentDetailsRepo.findByMentorId(mentorId);
        return students.stream().map(s -> {
            StudentDetailsDto dto = new StudentDetailsDto();
            dto.setStudentId(s.getStudentId());
            dto.setStudentName(s.getStudentName());
            dto.setCurrent_mentor(s.getMentor() != null ? s.getMentor().getName() : null);
            return dto;
        }).toList();
    }

    public void reassignMentor(MentorReassignDto request)
    {
        Mentor mentor = mentorRepo.findById(request.getMentorId()).orElseThrow(() -> new RuntimeException("Mentor not found"));

        List<StudentDetails> students = studentDetailsRepo.findAllById(request.getStudentIds());

        if (students.isEmpty()) {
            throw new RuntimeException("No students found for given IDs");
        }

        for (StudentDetails student : students) {
            student.setMentor(mentor);
        }

        studentDetailsRepo.saveAll(students);
    }








}

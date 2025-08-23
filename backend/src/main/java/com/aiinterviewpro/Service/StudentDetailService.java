package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.StudentDetailsDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentDetailService {

    @Autowired
    StudentDetailsRepo studentDetailsRepo;

    public List<StudentDetailsDto> getStudentsByMentor(Integer mentorId)
    {
        List<StudentDetails> students = studentDetailsRepo.findByMentorId(mentorId);
        return students.stream().map(s -> {
            StudentDetailsDto dto = new StudentDetailsDto();
            dto.setStudentId(dto.getStudentId());
            dto.setStudentName(s.getStudentName());
            dto.setCurrent_mentor(s.getMentor() != null ? s.getMentor().getName() : null);
            return dto;
        }).toList();
    }


}

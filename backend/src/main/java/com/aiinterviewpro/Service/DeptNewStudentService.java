package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptNewStudentDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeptNewStudentService {

    @Autowired
    private StudentDetailsRepo studentDetailsRepo;

    public StudentDetails saveStudent(DeptNewStudentDto dto) {
        StudentDetails student = new StudentDetails();
        student.setStudentName(dto.getStudentName());
        //student.setRollNumber(dto.getRollNumber());
        student.setEmail(dto.getEmail());
        student.setPhoneNumber(dto.getPhoneNumber());
        //student.setYearOfStudy(dto.getYearOfStudy());

        //student.setCgpa(dto.getCgpa());
        //student.setProfilePhotoUrl(dto.getProfilePhotoUrl());

        return studentDetailsRepo.save(student);
    }
}

package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptNewStudentDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class DeptNewStudentService {

    @Autowired
    private StudentDetailsRepo studentDetailsRepo;

    private static final Pattern EMAIL_PATTERN =
            Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

    // Roll Number pattern: 2 letters + 4 digits(year) + 3 digits(seq)
    private static final Pattern ROLL_PATTERN =
            Pattern.compile("^[A-Z]{2}\\d{4}\\d{3}$");

    public DeptNewStudentDto saveStudent(DeptNewStudentDto dto) {
        // ===== Validation =====
        if (dto.getStudentName() == null || dto.getStudentName().trim().isEmpty()) {
            throw new RuntimeException("Name cannot be empty");
        }
        if (dto.getRollNumber() == null || dto.getRollNumber().trim().isEmpty()) {
            throw new RuntimeException("Roll Number cannot be empty");
        }
        if (!ROLL_PATTERN.matcher(dto.getRollNumber()).matches()) {
            throw new RuntimeException("Roll Number must be in format: <DeptCode><Year><3-digit seq>, e.g., CS2025001");
        }

        if (dto.getYearOfStudy() == null || dto.getYearOfStudy().trim().isEmpty()) {
            throw new RuntimeException("Year of Study cannot be empty");
        }
        if (dto.getCgpa() == null) {
            throw new RuntimeException("CGPA cannot be empty");
        }
        if (dto.getCgpa() < 0 || dto.getCgpa() > 10) {
            throw new RuntimeException("CGPA must be between 0 and 10");
        }
        if (dto.getEmail() == null || !EMAIL_PATTERN.matcher(dto.getEmail()).matches()) {
            throw new RuntimeException("Invalid email format");
        }
        if (dto.getPhoneNumber() == null || !dto.getPhoneNumber().matches("\\d{10}")) {
            throw new RuntimeException("Phone number must be 10 digits");
        }

        // ===== Create and Save Entity =====
        StudentDetails student = new StudentDetails();
        student.setStudentName(dto.getStudentName());
        student.setRollNumber(dto.getRollNumber());
        student.setEmail(dto.getEmail());
        student.setPhoneNumber(dto.getPhoneNumber());
        student.setYearOfStudy(dto.getYearOfStudy());
        student.setCgpa(dto.getCgpa());

        StudentDetails savedStudent = studentDetailsRepo.save(student);

        // ===== Convert Entity back to DTO =====
        DeptNewStudentDto responseDto = new DeptNewStudentDto();
        responseDto.setStudentName(savedStudent.getStudentName());
        responseDto.setRollNumber(savedStudent.getRollNumber());
        responseDto.setEmail(savedStudent.getEmail());
        responseDto.setPhoneNumber(savedStudent.getPhoneNumber());
        responseDto.setYearOfStudy(savedStudent.getYearOfStudy());
        responseDto.setCgpa(savedStudent.getCgpa());

        return responseDto;
    }
}

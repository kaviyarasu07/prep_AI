package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptNewStudentDto;
import com.aiinterviewpro.Entity.DepartmentMaster;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.DepartmentMasterRepo;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Pattern;

@Service
public class DeptNewStudentService {

    @Autowired
    private StudentDetailsRepo studentDetailsRepo;

    @Autowired
    private DepartmentMasterRepo departmentMasterRepo;

    private static final Pattern EMAIL_PATTERN =
            Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

    private static final Pattern ROLL_PATTERN =
            Pattern.compile("^[A-Z]{2}\\d{4}\\d{3}$"); // DeptCode + Year + Seq

    public DeptNewStudentDto saveStudent(DeptNewStudentDto dto) {
        // ===== Validation =====
        if (dto.getStudentName() == null || dto.getStudentName().trim().isEmpty()) {
            throw new RuntimeException("Name cannot be empty");
        }
        if (dto.getRollNumber() == null || dto.getRollNumber().trim().isEmpty()) {
            throw new RuntimeException("Roll Number cannot be empty");
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
        DepartmentMaster dept = departmentMasterRepo.findById(dto.getDepartmentId())
                .orElseThrow(() -> new RuntimeException("Department not found"));

        student.setDepartment(dept);


        StudentDetails savedStudent = studentDetailsRepo.save(student);

        // ===== Roll Number Generation
        String rollNumber;
        if (dto.getRollNumber() == null || dto.getRollNumber().trim().isEmpty()) {
            // Auto-generate
            rollNumber = generateRollNumber(dept.getDepartmentName());
        } else {
            // User input validation
            if (!ROLL_PATTERN.matcher(dto.getRollNumber()).matches())
                throw new RuntimeException("Roll Number must be in format: <DeptCode><Year><3-digit seq>");
            rollNumber = dto.getRollNumber();
        }

        // ===== DB Uniqueness Check =====
        while (studentDetailsRepo.existsByRollNumber(rollNumber)) {
            // Increment sequence if exists
            String prefix = rollNumber.substring(0, rollNumber.length() - 3);
            int seq = Integer.parseInt(rollNumber.substring(rollNumber.length() - 3)) + 1;
            rollNumber = prefix + String.format("%03d", seq);
        }



        // ===== Convert Entity back to DTO =====
        DeptNewStudentDto responseDto = new DeptNewStudentDto();
        responseDto.setStudentName(savedStudent.getStudentName());
        responseDto.setRollNumber(savedStudent.getRollNumber());
        responseDto.setEmail(savedStudent.getEmail());
        responseDto.setPhoneNumber(savedStudent.getPhoneNumber());
        responseDto.setYearOfStudy(savedStudent.getYearOfStudy());
        responseDto.setCgpa(savedStudent.getCgpa());

        responseDto.setDepartmentId(savedStudent.getDepartment().getId());

        return responseDto;
    }
    // ===== Private Roll Number Generation Method =====
    private String generateRollNumber(String departmentName) {
        int year = java.time.Year.now().getValue();

        // Split department name by space
        String[] words = departmentName.split(" ");
        String deptCode = "";

        // Take first letter of first two words
        for (int i = 0; i < words.length && i < 2; i++) {
            deptCode += words[i].substring(0, 1).toUpperCase();
        }

        // Get last roll number from DB
        String lastRoll = studentDetailsRepo.findLastRollNumber(deptCode + year);
        int seq = 1;
        if (lastRoll != null) {
            seq = Integer.parseInt(lastRoll.substring(lastRoll.length() - 3)) + 1;
        }

        return deptCode + year + String.format("%03d", seq);
    }

    //get department name only
    public List<String> getAllDepartmentNames() {
        return departmentMasterRepo.findAllDepartmentNames();
    }

}

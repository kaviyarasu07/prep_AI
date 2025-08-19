package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptStudentTableDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DeptStudentTableService {

    @Autowired
    private StudentDetailsRepo studentDetailsRepo;

    //get table
    public List<DeptStudentTableDto> getAllStudents() {
        List<StudentDetails> students = studentDetailsRepo.findAll();
        return students.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    //get department based table

    private static final Map<String, String> deptMapping = new HashMap<>();

    static {
        deptMapping.put("CSE", "Computer Science");
        deptMapping.put("ECE", "Electronics and Communication");
        deptMapping.put("EEE", "Electrical and Electronics");
        deptMapping.put("MECH", "Mechanical");
        deptMapping.put("IT", "Information Technology");
        deptMapping.put("AIDS", "Artificial Intelligence and Data Science");
        deptMapping.put("CYBER", "Cyber Security");
        deptMapping.put("CIVIL", "Civil Engineering");
        deptMapping.put("AERO", "Aeronautical Engineering");
    }

    public List<DeptStudentTableDto> getStudentsByDepartment(String deptCode) {
        // Convert short code to full name
        String deptName = deptMapping.getOrDefault(deptCode.toUpperCase(), deptCode);

        List<StudentDetails> students = studentDetailsRepo.findByDepartment_DepartmentName(deptName);

        return students.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }


    //convert entity to dto
    public DeptStudentTableDto mapToDto(StudentDetails s) {
        DeptStudentTableDto dto = new DeptStudentTableDto();
        dto.setRollNumber(s.getRollNumber());
        dto.setStudentName(s.getStudentName());
        dto.setYearOfStudy(s.getYearOfStudy());
        dto.setCgpa(s.getCgpa());

        // convert boolean → string
        dto.setStatus(s.getIsActive() != null && s.getIsActive() ? "Active" : "Inactive");

        return dto;
    }

    // filter by dept + year + mentor + status
    public List<DeptStudentTableDto> getFilteredStudents(String deptCode,
                                                         String year,
                                                         String mentor,
                                                         String status) {
        // step 1: map dept code -> full name
        String deptName = deptMapping.getOrDefault(deptCode.toUpperCase(), deptCode);

        // step 2: get only that dept students first
        List<DeptStudentTableDto> students = studentDetailsRepo.findByDepartment_DepartmentName(deptName)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());

        // step 3: apply filters inside that dept only

        // year filter
        if (year != null && !year.isEmpty()) {
            students = students.stream()
                    .filter(s -> year.equalsIgnoreCase(s.getYearOfStudy()))
                    .toList();
        }

        // mentor filter (when mentor added in DTO later)
    /*
    if (mentor != null && !mentor.isEmpty()) {
        students = students.stream()
                .filter(s -> mentor.equalsIgnoreCase(s.getMentorName()))
                .toList();
    }
    */

        // status filter
        if (status != null && !status.isEmpty()) {
            students = students.stream()
                    .filter(s -> status.equalsIgnoreCase(s.getStatus()))
                    .toList();
        }

        return students;
    }

}


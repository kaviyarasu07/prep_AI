package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptStudentTableDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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

    // filter by year, mentor, status
    public List<DeptStudentTableDto> getFilteredStudents(String year, String mentor, String status) {
        // fetch all students first
        List<DeptStudentTableDto> students = studentDetailsRepo.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());

        // year filter
        if (year != null && !year.isEmpty()) {
            students = students.stream()
                    .filter(s -> year.equalsIgnoreCase(s.getYearOfStudy()))
                    .toList();
        }

        // mentor filter (later uncomment when mentor available in DTO)
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


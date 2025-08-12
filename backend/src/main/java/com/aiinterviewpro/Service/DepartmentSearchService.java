package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DepartmentSummaryDto;
import com.aiinterviewpro.Repository.DepartmentSummarySearchRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DepartmentSearchService {
    @Autowired
    private DepartmentSummarySearchRepo searchrepo;

    public List<DepartmentSummaryDto> searchDepartmentSummary(
            String departmentName,
            String assignedAdmins,
            String status,
            Integer numberOfStudents
    ) {

        departmentName = normalizeInput(departmentName);
       assignedAdmins = normalizeInput(assignedAdmins);
       status = normalizeInput(status);

        List<Object[]> results = searchrepo.searchDepartmentSummary(
                departmentName, assignedAdmins, status, numberOfStudents
        );

        return results.stream().map(row -> {
            DepartmentSummaryDto dto = new DepartmentSummaryDto();

            dto.setId(row[0] != null ? ((Number) row[0]).intValue() : 0);
            dto.setDepartmentName((String) row[1]);
            dto.setAssignedAdmins((String) row[2]);

            Number studentCount = (Number) row[3];
            dto.setNumberOfStudents(studentCount != null ? studentCount.intValue() : 0);

            dto.setStatus((String) row[4]);
            dto.setRoleId(row[5] != null ? ((Number) row[5]).intValue() : 0);

            return dto;
        }).toList();
    }


    private String normalizeInput(String input) {
        if (input == null || input.isBlank()) return input;


        input = input.trim().replaceAll("\\s{2,}", " ");


        if (input.matches("([A-Za-z]\\s+)+[A-Za-z]")) {
            input = input.replaceAll("\\s+", "");
        }


        input = input.replaceAll("([a-z])([A-Z])", "$1 $2");


        return Arrays.stream(input.trim().split("\\s+"))
                .map(word -> word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase())
                .collect(Collectors.joining(" "));

    }
    }




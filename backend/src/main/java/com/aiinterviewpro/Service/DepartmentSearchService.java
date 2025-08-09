package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DepartmentSummaryDto;
import com.aiinterviewpro.Repository.DepartmentSummarySearchRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentSearchService {
    @Autowired
    private DepartmentSummarySearchRepo searchrepo;

    public List<DepartmentSummaryDto> searchDepartmentSummary(
            String departmentName,
            String assignedAdmin,
            String status,
            Integer numberOfStudents
    ) {
        List<Object[]> results = searchrepo.searchDepartmentSummary(
                departmentName, assignedAdmin, status, numberOfStudents
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
}



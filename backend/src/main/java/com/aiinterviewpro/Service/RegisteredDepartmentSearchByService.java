package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DepartmentSearchDto;
import com.aiinterviewpro.Repository.RegisteredDepartmentsSearchRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisteredDepartmentSearchByService {

    @Autowired
    private RegisteredDepartmentsSearchRepo searchRepo;

    public List<DepartmentSearchDto> searchDepartments(String departmentName,
                                                       String departmentCode,
                                                       Integer activeStudents,
                                                       Integer totalStudents,
                                                       Boolean status) {

        List<Object[]> results = searchRepo.searchDepartmentDetails(
                departmentName,
                departmentCode,
                activeStudents,
                totalStudents,
                status
        );

        return results.stream()
                .map(obj -> new DepartmentSearchDto(((Number) obj[0]).intValue(),   // d.id
                        (String) obj[1],                 // d.department_name
                        (String) obj[2],                 // d.department_code
                        ((Number) obj[3]).intValue(),   // totalStudents
                        ((Number) obj[4]).intValue(),   // activeStudents
                        obj[5] != null && (Boolean) obj[5]
                ))
                .toList();
    }
}

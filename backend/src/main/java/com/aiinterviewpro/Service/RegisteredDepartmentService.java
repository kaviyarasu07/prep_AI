package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.RegisteredDepartmentsDto;
import com.aiinterviewpro.Repository.DepartmentMasterRepo;
import com.aiinterviewpro.Repository.DepartmentRepo;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service

public class RegisteredDepartmentService {
    @Autowired
    private DepartmentRepo department;
    @Autowired
    private DepartmentMasterRepo master;
    @Autowired
    private StudentDetailsRepo student;

    public Page<RegisteredDepartmentsDto> getRegisteredDepartments(Pageable pageable){
        Page<Object[]>results = department.getRegisteredDepartments(pageable);
        List<RegisteredDepartmentsDto> departments =  results.stream().map(row -> {
            int id = parseIntSafe(row[0]);
            String departmentName = (String) row[1];
            String departmentCode = (String) row[2];
            int totalStudents = ((Number) row[3]).intValue();
            int activeStudents = ((Number) row[4]).intValue();
            Boolean isActive = (Boolean) row[5];
            String status = (isActive != null && isActive) ? "Active" : "Inactive";
            Date creationDate = (Date) row[6];
            return new RegisteredDepartmentsDto(id, departmentName, departmentCode, totalStudents, activeStudents,status,creationDate);
        }).toList();

        return new PageImpl<>(departments, pageable, results.getTotalElements());
    }

    private int parseIntSafe(Object value) {
        if (value == null) return 0;
        if (value instanceof Number) return ((Number) value).intValue();
        if (value instanceof String) return Integer.parseInt((String) value);
        throw new IllegalArgumentException("Unexpected type: " + value.getClass());

    }


}

package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptDashBoardDto;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeptDashboardService {

    @Autowired
    private StudentDetailsRepo studentDetailsRepo;

    public Long getTotalStudents(String departmentName) {
        return studentDetailsRepo.getTotalStudentsByDepartment(departmentName);
    }
}

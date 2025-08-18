package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptDashBoardDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DeptDashboardService {

    @Autowired
    private StudentDetailsRepo studentDetailsRepo;

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

    public long getStudentCountByDept(String deptName) {
        // Short form → full form mapping
        String fullDeptName = deptMapping.getOrDefault(deptName.toUpperCase(), deptName);
        return studentDetailsRepo.countStudentsByDeptName(fullDeptName);
    }

    //filter  by study year

    public List<StudentDetails> getStudentsByYear(String year) {
        return studentDetailsRepo.findByYearOfStudy(year);
    }

}




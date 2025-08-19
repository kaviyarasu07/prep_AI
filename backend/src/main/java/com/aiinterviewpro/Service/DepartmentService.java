package com.aiinterviewpro.Service;

import com.aiinterviewpro.Entity.Department;
import com.aiinterviewpro.Entity.Mentor;
import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Repository.DepartmentRepo;
import com.aiinterviewpro.Repository.MentorRepo;
import com.aiinterviewpro.Repository.StaffDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DepartmentService {

    @Autowired
    DepartmentRepo departmentRepo;

    @Autowired
    StaffDetailsRepo staffDetailsRepo;

    @Autowired
    MentorRepo mentorRepo;

    public Map<String, Object> getDepartmentOverview(Integer departmentId)
    {
        Department dept = departmentRepo.findDepartmentWithCollegeAndMaster(departmentId);
        StaffDetails admin = staffDetailsRepo.findDepartmentAdmin(departmentId).orElse(null);
        List<Mentor> mentors = mentorRepo.findMentorsByDepartment(departmentId);
        Map<String, Object> response = new HashMap<>();
        response.put("collegeName", dept.getCollege().getName());
        response.put("departmentName", dept.getDepartmentMaster().getDepartmentName());
        response.put("departmentAdmin", admin != null ? admin.getStaffName() : null);
        response.put("mentors", mentors);
        return response;
    }

}

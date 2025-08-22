package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptAddStaffDto;
import com.aiinterviewpro.Entity.Department;
import com.aiinterviewpro.Entity.DepartmentMaster;
import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Enum.Designation;
import com.aiinterviewpro.Repository.DepartmentMasterRepo;
import com.aiinterviewpro.Repository.DepartmentRepo;
import com.aiinterviewpro.Repository.StaffDetailsRepo;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class DeptAddStaffService {

    @Autowired
    private StaffDetailsRepo staffDetailsRepo;

    @Autowired
    private DepartmentRepo departmentRepo;

    @Autowired
    private StudentDetailsRepo studentDetailsRepo;

    @Autowired
    private DepartmentMasterRepo departmentMasterRepo;


    public StaffDetails createStaff(DeptAddStaffDto dto) {

        StaffDetails staff = new StaffDetails();
        staff.setStaffName(dto.getFullName());
        staff.setEmail(dto.getEmailId());
        staff.setPhoneNumber(dto.getPhoneNumber());
        staff.setStaffCode(dto.getStaffId());
        staff.setProfilePhoto(dto.getProfilePhotoUrl());
        staff.setDesignation(Designation.valueOf(dto.getDesignation().toUpperCase())); // enum mapping

        // 🔹 Step 1: Find DepartmentMaster by name
        DepartmentMaster deptMaster = departmentMasterRepo.findByDepartmentName(dto.getDepartmentName())
                .orElseThrow(() -> new RuntimeException(
                        "Department not found with name: " + dto.getDepartmentName()
                ));

        // 🔹 Step 2: Find Department (assuming single college for now)
        Department dept = departmentRepo.findByDepartmentMaster(deptMaster)
                .orElseThrow(() -> new RuntimeException(
                        "Department not mapped for departmentMaster: " + deptMaster.getDepartmentName()
                ));

        staff.setDepartment(dept);

        // 🔹 Step 3: Assign Students (if any)
        if (dto.getAssignedStudents() != null && !dto.getAssignedStudents().isEmpty()) {
            List<StudentDetails> students = studentDetailsRepo.findAllById(dto.getAssignedStudents());
            staff.setStudents(new HashSet<>(students));
        }

        return staffDetailsRepo.save(staff);
    }
}

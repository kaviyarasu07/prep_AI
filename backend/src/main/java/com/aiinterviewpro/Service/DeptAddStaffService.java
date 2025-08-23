package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptAddStaffDto;
import com.aiinterviewpro.Entity.*;
import com.aiinterviewpro.Enum.Designation;
import com.aiinterviewpro.Repository.*;
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

    @Autowired
    private RoleRepo roleRepo;


    public StaffDetails createStaff(DeptAddStaffDto dto) {

        StaffDetails staff = new StaffDetails();
        staff.setStaffName(dto.getFullName());
        staff.setEmail(dto.getEmailId());
        staff.setPhoneNumber(dto.getPhoneNumber());
        staff.setStaffCode(dto.getStaffId());
        staff.setProfilePhoto(dto.getProfilePhotoUrl());
        //staff.setDesignation(Designation.valueOf(dto.getDesignation().toUpperCase())); // enum mapping


        // ===== Find DepartmentMaster by name =====
        List<DepartmentMaster> depts = departmentMasterRepo.findByDepartmentName(dto.getDepartmentName());

        if (depts.isEmpty()) {
            throw new RuntimeException("Department not found: " + dto.getDepartmentName());
        }
        if (depts.size() > 1) {
            throw new RuntimeException("Multiple departments found with name: " + dto.getDepartmentName());
        }

        DepartmentMaster deptMaster = depts.get(0);

        // ===== Find Department using DepartmentMaster =====
        Department dept = departmentRepo.findByDepartmentMaster(deptMaster)
                .orElseThrow(() -> new RuntimeException(
                        "Department not mapped for departmentMaster: " + deptMaster.getDepartmentName()
                ));

        staff.setDepartment(dept);
        // ===== Role Mapping =====
        if (dto.getRoleName() != null && !dto.getRoleName().trim().isEmpty()) {
            Role role = roleRepo.findByName(dto.getRoleName())
                    .orElseThrow(() -> new RuntimeException(
                            "Role not found with name: " + dto.getRoleName()
                    ));
            staff.setRole(role);
        }



        //  Assign Students (if any)
        if (dto.getAssignedStudents() != null && !dto.getAssignedStudents().isEmpty()) {
            List<StudentDetails> students = studentDetailsRepo.findAllById(dto.getAssignedStudents());
            staff.setStudents(new HashSet<>(students));
        }

        return staffDetailsRepo.save(staff);
    }
}

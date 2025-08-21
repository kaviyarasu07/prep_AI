package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DeptAddStaffDto;
import com.aiinterviewpro.Entity.DepartmentMaster;
import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Repository.DepartmentMasterRepo;
import com.aiinterviewpro.Repository.StaffDetailsRepo;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DeptAddStaffService {

    @Autowired
    private StaffDetailsRepo staffDetailsRepo;

    @Autowired
    private DepartmentMasterRepo departmentMasterRepo;

    @Autowired
    private StudentDetailsRepo studentDetailsRepo;


//   public void createStaff(DeptAddStaffDto dto) {
//
//          StaffDetails staff = new StaffDetails();
//
//          // Basic mapping
//          staff.setStaffName(dto.getFullName());
//          staff.setEmail(dto.getEmailId());
//          staff.setPhoneNumber(dto.getPhoneNumber());
//          staff.setStaffCode(dto.getStaffId());
//          staff.setProfilePhoto(dto.getProfilePhotoUrl());
//        staff.setDesignation(dto.getRole()); // direct save string (Professor / HOD etc)
//
//          // Department mapping
//          DepartmentMaster dept = departmentMasterRepo.findByName(dto.getDepartment())
//                  .orElseThrow(() -> new RuntimeException("Department not found: " + dto.getDepartment()));
//        staff.setDepartment(dept);
//
//          // Map assigned student IDs
//          if (dto.getAssignedStudents() != null && !dto.getAssignedStudents().isEmpty()) {
//              List<StudentDetails> students = studentDetailsRepo.findAllById(dto.getAssignedStudents());
//              staff.setStudents(new HashSet<>(students));
//        }
//
//          staffDetailsRepo.save(staff);
//      }













}

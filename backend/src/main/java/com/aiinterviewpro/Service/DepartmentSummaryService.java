package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DepartmentSummaryDto;
import com.aiinterviewpro.Entity.Department;
import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Repository.DepartmentRepo;
import com.aiinterviewpro.Repository.StaffDetailsRepo;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class DepartmentSummaryService {
    @Autowired
    private DepartmentRepo departmentrepo;
    @Autowired
    private StaffDetailsRepo staffdetailsrepo;
    @Autowired
    private StudentDetailsRepo studentdetailsrepo;
    @Autowired
    private StaffDetailsRepo staffrepo;

//    --->Active Department Summary(Get all)-->

    public List<DepartmentSummaryDto> getActiveDepartmentSummaries() {
        List<Object[]> results = departmentrepo.getActiveDepartmentSummary();
        List<DepartmentSummaryDto> summaries = new ArrayList<>();

        for (Object[] row : results) {
            int departmentId = parseIntSafe(row[0]);
            String departmentName = (String) row[1];
            String assignedAdmins = (String) row[2];
            int numberOfStudents = ((Number) row[3]).intValue();
            String status = (String) row[4];

            

            DepartmentSummaryDto dto = new DepartmentSummaryDto(departmentId,
                    departmentName, assignedAdmins, numberOfStudents, status);
            summaries.add(dto);
        }
        return summaries;
    }

    private int parseIntSafe(Object value) {

        if (value == null) return 0;
        if (value instanceof Number) return ((Number) value).intValue();
        if (value instanceof String) return Integer.parseInt((String) value);
        throw new IllegalArgumentException("Unexpected type: " + value.getClass());
    }


    //-->Getting Department by Id-->
    public DepartmentSummaryDto getDepartmentSummaryById(int id) {
        Department department = departmentrepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Department not found with id " + id));

        String departmentName = department.getDepartmentMaster().getDepartmentName();

        List<StaffDetails> staffList = staffdetailsrepo.findByDepartmentId(department.getId());

        StringBuilder assignedAdminsBuilder = new StringBuilder();
        for (StaffDetails staff : staffList) {
            if ("DEPARTMENT_ADMIN".equals(staff.getRole().getName())) {
                if (assignedAdminsBuilder.length() > 0) {
                    assignedAdminsBuilder.append(", ");
                }
                assignedAdminsBuilder.append(staff.getStaffName());
            }
        }
        String assignedAdmins = assignedAdminsBuilder.toString();

        int numberOfStudents = studentdetailsrepo.countByDepartmentId(id);

        DepartmentSummaryDto dto = new DepartmentSummaryDto();
        dto.setId(department.getId());
        dto.setDepartmentName(departmentName);
        dto.setAssignedAdmins(assignedAdmins);
        dto.setNumberOfStudents(numberOfStudents);
        dto.setStatus("Active"); // Hardcoded since only active departments are shown

        return dto;
    }


     @Transactional
            public void updateDepartmentAndAdmin(DepartmentSummaryDto dto){


            // Step 1: Update department
            int deptRows = departmentrepo.updateDepartmentSummary(
            dto.getId(),
            dto.getDepartmentName(),
            dto.getStatus()
    );

            if (deptRows == 0) {
                throw new RuntimeException("Department update failed. Check department ID and name.");
            }


         int staffRows = staffrepo.updateAdminNameByDepartment(
                 dto.getId(),
                 dto.getRoleId(),
                 dto.getAssignedAdmins()
         );

         if (staffRows == 0) {
             throw new RuntimeException("No admin found for this department with the given role to update.");
         }
     }
}




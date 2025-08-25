package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DepartmentSummaryDto;
import com.aiinterviewpro.DTO.UpdateRequestDto;
import com.aiinterviewpro.Entity.Department;
import com.aiinterviewpro.Entity.DepartmentMaster;
import com.aiinterviewpro.Entity.Role;
import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Repository.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
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
    @Autowired
    private DepartmentMasterRepo masterrepo;
    @Autowired
    private RoleRepo rolerepo;

//    --->Active Department Summary(Get all)-->


    public Page<DepartmentSummaryDto> getActiveDepartmentSummaries(Pageable pageable) {

        Page<Object[]> results = departmentrepo.getActiveDepartmentSummary(pageable);


        List<DepartmentSummaryDto> summaries = results.stream().map(row -> {
            int departmentId = parseIntSafe(row[0]);
            String departmentName = (String) row[1];
            String assignedAdmins = (String) row[2];
            int numberOfStudents = ((Number) row[3]).intValue();
            String status = (String) row[4];
            return new DepartmentSummaryDto(departmentId, departmentName, assignedAdmins, numberOfStudents, status);
        }).toList();

        return new PageImpl<>(summaries, pageable, results.getTotalElements());
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
            if ("Department Admin".equalsIgnoreCase(staff.getRole().getName())) {
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
        dto.setAssignedAdmins(
                (assignedAdmins == null || assignedAdmins.trim().isEmpty())
                        ? "Unassigned"
                        : assignedAdmins
        );
        dto.setNumberOfStudents(numberOfStudents);
        dto.setStatus("Active"); // Hardcoded since only active departments are shown

        return dto;
    }

    @Transactional

    public void updateDepartmentAndAdmin(Integer id, UpdateRequestDto dto) {
        Department department = departmentrepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Department not found with id " + id));
        DepartmentMaster master = masterrepo.findById(department.getDepartmentMaster().getId())
                .orElseThrow(() -> new RuntimeException("Department not found for ID: " + id));


        master.setDepartmentName(dto.getDepartmentName());
        masterrepo.save(master);

        // Update department status
        department.setIsActive(dto.getStatus());
        departmentrepo.save(department);


        Role departmentAdminRole = rolerepo.findByName("Department Admin")
                .orElseThrow(() -> new EntityNotFoundException("Role DEPARTMENT_ADMIN not found"));


        StaffDetails admin = staffrepo.findByDepartmentIdAndRoleId(id, departmentAdminRole.getId())
                .orElseThrow(() -> new EntityNotFoundException("Department admin not found for department id " + id));

// Update the staff name
        admin.setStaffName(dto.getAssignedAdmins());
        staffrepo.save(admin);

    }
@Transactional
    public void deleteDepartment(Integer id){
        staffrepo.deleteByDepartmentId(id);

        Department department = departmentrepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Department not found with id " + id));
        departmentrepo.delete(department);
    }
}









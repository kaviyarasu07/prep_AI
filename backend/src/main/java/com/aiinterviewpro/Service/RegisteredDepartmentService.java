package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.RegisteredDepartmentsDto;
//import com.aiinterviewpro.DTO.UpdateRequestDto;
import com.aiinterviewpro.DTO.UpdateRequestDto;
import com.aiinterviewpro.Entity.Department;
import com.aiinterviewpro.Entity.DepartmentMaster;
import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Repository.DepartmentMasterRepo;
import com.aiinterviewpro.Repository.DepartmentRepo;
import com.aiinterviewpro.Repository.StaffDetailsRepo;
import com.aiinterviewpro.Repository.StudentDetailsRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class RegisteredDepartmentService {
    @Autowired
    private DepartmentRepo departmentrepo;
    @Autowired
    private DepartmentMasterRepo masterrepo;
    @Autowired
    private StudentDetailsRepo student;
    @Autowired
    private StaffDetailsRepo staff;

    public Page<RegisteredDepartmentsDto> getRegisteredDepartments(Pageable pageable) {
        Page<Object[]> results = departmentrepo.getRegisteredDepartments(pageable);
        List<RegisteredDepartmentsDto> departments = results.stream().map(row -> {
            int id = parseIntSafe(row[0]);
            String departmentName = (String) row[1];
            String departmentCode = (String) row[2];
            int totalStudents = ((Number) row[3]).intValue();
            int activeStudents = ((Number) row[4]).intValue();
            Boolean isActive = (Boolean) row[5];
            String status = (isActive != null && isActive) ? "Active" : "Inactive";
            Date creationDate = (Date) row[6];
            return new RegisteredDepartmentsDto(id, departmentName, departmentCode, totalStudents, activeStudents, status, creationDate);
        }).toList();

        return new PageImpl<>(departments, pageable, results.getTotalElements());
    }

    private int parseIntSafe(Object value) {
        if (value == null) return 0;
        if (value instanceof Number) return ((Number) value).intValue();
        if (value instanceof String) return Integer.parseInt((String) value);
        throw new IllegalArgumentException("Unexpected type: " + value.getClass());

    }


    @Transactional
    public RegisteredDepartmentsDto updateRegisteredDepartments(Integer id, UpdateRequestDto dto) {
        Department department = departmentrepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Entity not found with id " + id));

        DepartmentMaster dmaster = masterrepo.findById(department.getDepartmentMaster().getId())
                .orElseThrow(() -> new RuntimeException("DepartmentMaster not found for ID: " + id));

        // Update DepartmentMaster fields
        dmaster.setDepartmentName(dto.getDepartmentName());
        dmaster.setDepartmentCode(dto.getDepartmentCode());
        masterrepo.save(dmaster);

        // Update Department fields
        department.setIsActive(dto.getStatus());
        departmentrepo.save(department);

        // Compute summary data
        int totalStudents = student.countTotalStudentsByDepartmentId(id);
        int activeStudents = student.countByDepartmentIdAndIsActiveTrue(id);

        // Return updated summary DTO
        return new RegisteredDepartmentsDto(
                department.getId(),
                dmaster.getDepartmentName(),
                dmaster.getDepartmentCode(),
                totalStudents,
                activeStudents,
                department.getIsActive() != null && department.getIsActive() ? "Active" : "Inactive",
                dmaster.getCreatedAt()
        );
    }

    @Transactional
    public String deactivateDepartment(Integer departmentId) {
        Department department = departmentrepo.findById(departmentId)
                .orElseThrow(() -> new EntityNotFoundException("Department not found with ID: " + departmentId));

        List<StaffDetails> admins = staff.findByDepartment(department);

        if (!admins.isEmpty()) {
            // You can show names, emails, or any identifier
            String adminNames = admins.stream()
                    .map(StaffDetails::getStaffName) // or getEmail(), getUsername() etc.
                    .collect(Collectors.joining(", "));
            throw new IllegalStateException("Cannot deactivate department. Associated admin(s): " + adminNames);
        }

        // Soft delete
        department.setIsActive(false);
        departmentrepo.save(department);
        return "Department deactivated successfully.";
    }


}

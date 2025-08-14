package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DepartmentManagementDto;
import com.aiinterviewpro.DTO.ResetPasswordRequestDto;
import com.aiinterviewpro.Entity.*;
import com.aiinterviewpro.Enum.RoleEnum;
import com.aiinterviewpro.Repository.*;
import com.aiinterviewpro.Util.PasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.LocalDateTime;

@Service

public class DepartmentManagementService {

    @Autowired
    private DepartmentMasterRepo masterepo;
    @Autowired
    private StaffDetailsRepo staffrepo;
    @Autowired
    private StudentDetailsRepo student;
    @Autowired
    private RoleRepo rolerepo;
    @Autowired
    private DepartmentRepo deptrepo;
    @Autowired
    private CollegeRepo collegerepo;
    @Autowired
    private EmailService email;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private LoginRepo loginrepo;


    public DepartmentManagementDto create(DepartmentManagementDto dto) {
        DepartmentMaster master = new DepartmentMaster();
        master.setDepartmentName(dto.getDepartmentName());
        master.setDepartmentCode(dto.getDepartmentCode());
        master.setDegreeType(dto.getDegreeType());
        DepartmentMaster savedInfo = masterepo.save(master);

        College college = collegerepo.findById(dto.getCollegeId())
                .orElseThrow(() -> new RuntimeException("College not found"));

        Department department = new Department();
        department.setCollege(college);
        department.setDepartmentMaster(savedInfo);
        Department savedDepartment = deptrepo.save(department);

        StaffDetails staff = new StaffDetails();
        staff.setStaffName(dto.getDepartmentAdminName());
        staff.setEmail(dto.getMailId());
        staff.setCollege(college);
        staff.setDepartment(savedDepartment);

        String tempPassword = PasswordUtil.generateTemporaryPassword(10);

        String subject = "Department Admin Credentials Created";

        String body = String.format(
                "Dear %s,\n\n" +
                        "You have been assigned as the Department Admin for the %s department at %s.\n\n" +
                        "Your temporary password is: %s\n\n" +
                        "Please log in and reset your password immediately.\n\n" +
                        "Regards,\nAdmin Team",
                staff.getStaffName(),
                master.getDepartmentName(),
                college.getName(),
                tempPassword
        );

        email.sendAdminEmail(staff.getEmail(), subject, body);

        Role role = rolerepo.findByName("DEPARTMENT_ADMIN")
                .orElseThrow(() -> new RuntimeException("Role not found: DEPARTMENT_ADMIN"));
        staff.setRole(role);
        staffrepo.save(staff);

        Login login = new Login();
        login.setEmail(staff.getEmail());
        login.setPassword(encoder.encode(tempPassword));
        login.setRole(role);
        login.setUserId(staff.getId());
        login.setIsTempPassword(true);
        login.setCreatedAt(LocalDateTime.now());
        login.setUpdatedAt(LocalDateTime.now());
        loginrepo.save(login);


        int totalNoOfStudents = student.countByDepartmentId(savedDepartment.getId());
        dto.setTotalNoOfStudents(totalNoOfStudents);

        return dto;
    }

    public void resetPassword(String newPassword, Principal principal){

        String email = principal.getName();
        Login user = loginrepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.isTempPassword()) {
            throw new RuntimeException("You can only reset your password if you have a temporary password");
        }

        if (newPassword == null||newPassword.length() < 10) {
            throw new RuntimeException("Password must be at least 10 characters long");
        }

        user.setPassword(encoder.encode(newPassword));
        user.setIsTempPassword(false);
        user.setLastLoginAt(LocalDateTime.now());

        loginrepo.save(user);
    }
}

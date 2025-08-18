package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.DepartmentManagementDto;
import com.aiinterviewpro.Entity.*;
import com.aiinterviewpro.Repository.*;
import com.aiinterviewpro.Util.PasswordUtil;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;

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
        // 1. Check if DepartmentMaster already exists
        List<DepartmentMaster> masters = masterepo.findByDepartmentName(dto.getDepartmentName());
        DepartmentMaster master = masters.isEmpty() ? null : masters.get(0);

        if (master == null) {
            // Create new master
            master = new DepartmentMaster();
            master.setDepartmentName(dto.getDepartmentName());
            master.setDepartmentCode(dto.getDepartmentCode());
            master.setDegreeType(dto.getDegreeType());
            master = masterepo.save(master);
        }

        // 2. Get College
        College college = collegerepo.findById(dto.getCollegeId())
                .orElseThrow(() -> new RuntimeException("College not found"));

        // 3. Check if Department already exists for this master + college
        Department department = deptrepo.findByCollege_IdAndDepartmentMaster_Id(college.getId(), master.getId())
                .orElse(null);

        if (department == null) {
            // Create new Department
            department = new Department();
            department.setCollege(college);
            department.setDepartmentMaster(master);
            department = deptrepo.save(department);
        }

        dto.setDepartmentId(department.getId());

        // 4. Create Staff, Login, Email only if staff doesn't already exist
        boolean staffExists = staffrepo.existsByEmail(dto.getMailId());
        if (!staffExists) {
            StaffDetails staff = new StaffDetails();
            staff.setStaffName(dto.getDepartmentAdminName());
            staff.setEmail(dto.getMailId());
            staff.setCollege(college);
            staff.setDepartment(department);

            String tempPassword = PasswordUtil.generateTemporaryPassword(10);

            String subject = "Department Admin Credentials Created";
            String body = String.format(
                    "Dear %s,\n\nYou have been assigned as the Department Admin for the %s department at %s.\n\n" +
                            "Your temporary password is: %s\n\nPlease log in and reset your password immediately.\n\nRegards,\nAdmin Team",
                    staff.getStaffName(), master.getDepartmentName(), college.getName(), tempPassword
            );

            email.sendAdminEmail(staff.getEmail(), subject, body);

            Role role = rolerepo.findByName("DEPARTMENT_ADMIN")
                    .orElseThrow(() -> new IllegalStateException("Role not found: DEPARTMENT_ADMIN"));
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
        }

        // 5. Set Student Count
        int totalNoOfStudents = student.countByDepartmentId(department.getId());
        dto.setTotalNoOfStudents(totalNoOfStudents);

        return dto;
    }





        public void handleForgotPassword (@NotBlank @Email String email){
            Login user = loginrepo.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found with this email"));

            if (user.isDisabled()) {
                throw new RuntimeException("Account is disabled");
            }

            String tempPassword = PasswordUtil.generateTemporaryPassword(10);
            String encodedPassword = encoder.encode(tempPassword);

            user.setPassword(encodedPassword);
            user.setIsTempPassword(true);
            loginrepo.save(user);
            String body = "Your temporary password is: " + tempPassword + "\nPlease login using this password and reset it immediately.";

            this.email.sendAdminEmail(email, "Temporary Password", body);
        }

        public void resetPassword (String newPassword, Principal principal){

            String email = principal.getName();
            Login user = loginrepo.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

            if (!user.isTempPassword()) {
                throw new RuntimeException("You can only reset your password if you have a temporary password");
            }

            if (newPassword == null || newPassword.length() < 10) {
                throw new RuntimeException("Password must be at least 10 characters long");
            }

            user.setPassword(encoder.encode(newPassword));
            user.setIsTempPassword(false);
            user.setLastLoginAt(LocalDateTime.now());

            loginrepo.save(user);
        }
    }

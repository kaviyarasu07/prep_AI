package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.CollegeRegistrationRequest;
import com.aiinterviewpro.Entity.*;
import com.aiinterviewpro.Enum.AffiliationType;
import com.aiinterviewpro.Enum.Status;
import com.aiinterviewpro.Repository.*;
import com.aiinterviewpro.Util.ValidationUtil;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class CollegeRegistrationService {
    private final StaffDetailsRepo staffDetailsRepo;
    private final CollegeRepo collegeRepo;
    private final LoginRepo loginRepo;
    private final RoleRepo roleRepo;
    private final PasswordEncoder passwordEncoder;
    private final CollegeTypeRepo collegeTypeRepo;

    @Transactional
    public void registerCollege(CollegeRegistrationRequest dto) {
        validateCollegeRegistration(dto);

        // Map enum to CollegeType entity
        CollegeType collegeType = collegeTypeRepo.findByName(dto.getCollegeType())
                .orElseThrow(() -> new IllegalArgumentException("Invalid college type"));

        // Create and save College
        College college = new College();
        college.setCollegeName(dto.getCollegeName());
        college.setCollegeType(collegeType);
        college.setAffiliationType(AffiliationType.valueOf(dto.getAffiliationType()));
        if (AffiliationType.valueOf(dto.getAffiliationType()) == AffiliationType.AFFILIATED) {
            if (dto.getAffiliatedUniversity() == null || dto.getAffiliatedUniversity().isBlank()) {
                throw new IllegalArgumentException("Affiliated university is required when type is AFFILIATED.");
            }
            college.setAffiliatedUniversity(dto.getAffiliatedUniversity());
        } else {
            college.setAffiliatedUniversity(null);
        }
        college.setCounselingCode(dto.getCounselingCode());
        college.setWebsite(dto.getWebsite());
        college.setEmail(dto.getOfficialEmail());
        college.setStatus(Status.PENDING);
        college = collegeRepo.save(college);

        Role collegeAdminRole = roleRepo.findByName("College Admin")
                .orElseThrow(() -> new RuntimeException("Role not found: COLLEGE_ADMIN"));

        Login login = new Login();
        login.setEmail(dto.getAdminEmail());
        login.setPassword(passwordEncoder.encode(dto.getPassword()));
        login.setRole(collegeAdminRole);
        login.setIsActive(true);
        login.setCreatedAt(LocalDateTime.now());
        login.setLastLoginAt(null);

        loginRepo.save(login);

        StaffDetails staff = new StaffDetails();
        staff.setStaffName(dto.getAdminName());
        staff.setEmail(dto.getAdminEmail());
        staff.setPhoneNumber(dto.getPhone());
        staff.setRole(collegeAdminRole);
        staff.setCollege(college);
        staff.setIsActive(true);
        staff.setLogin(login);
        staffDetailsRepo.save(staff);
    }

    private void validateCollegeRegistration(CollegeRegistrationRequest dto) {
        if (dto.getCollegeName() == null || dto.getCollegeType() == null || dto.getAffiliationType() == null ||
                dto.getCounselingCode() == null || dto.getOfficialEmail() == null ||
                dto.getAdminName() == null || dto.getAdminEmail() == null ||
                dto.getPassword() == null) {
            throw new IllegalArgumentException("All fields marked with * are required.");
        }

        if (!ValidationUtil.isValidEmail(dto.getOfficialEmail()) || !ValidationUtil.isValidEmail(dto.getAdminEmail())) {
            throw new IllegalArgumentException("Invalid email format.");
        }
        if (dto.getWebsite() != null && !ValidationUtil.isValidWebsite(dto.getWebsite())) {
            throw new IllegalArgumentException("Invalid website format.");
        }
        if (!ValidationUtil.isValidPassword(dto.getPassword())) {
            throw new IllegalArgumentException("Password must be at least 10 characters long.");
        }
        if (!ValidationUtil.isValidPhone(dto.getPhone())) {
            throw new IllegalArgumentException("Invalid phone number.");
        }

        if (collegeRepo.existsByCollegeName(dto.getCollegeName())) {
            throw new IllegalArgumentException("College with this name already exists.");
        }
        if (collegeRepo.existsByCounselingCode(dto.getCounselingCode())) {
            throw new IllegalArgumentException("College with this counseling code already exists.");
        }
        if (collegeRepo.existsByCollegeEmail(dto.getOfficialEmail())) {
            throw new IllegalArgumentException("College with this official email already exists.");
        }
        if (staffDetailsRepo.existsByEmail(dto.getAdminEmail())) {
            throw new IllegalArgumentException("Admin email already exists.");
        }
        if (collegeRepo.existsByCollegeEmail(dto.getAdminEmail())) {
            throw new RuntimeException("Admin email already used as a college email");
        }
        if (dto.getPhone() != null && staffDetailsRepo.existsByPhoneNumber(dto.getPhone())) {
            throw new IllegalArgumentException("Admin phone already exists.");
        }
        if (loginRepo.existsByEmail(dto.getAdminEmail())) {
            throw new IllegalArgumentException("Username already taken.");
        }
    }

}

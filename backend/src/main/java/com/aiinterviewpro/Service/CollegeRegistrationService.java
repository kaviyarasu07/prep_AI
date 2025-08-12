package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.CollegeRegistrationRequest;
import com.aiinterviewpro.Entity.College;
import com.aiinterviewpro.Entity.CollegeType;
import com.aiinterviewpro.Entity.Login;
import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Enum.AffiliationType;
import com.aiinterviewpro.Repository.CollegeRepo;
import com.aiinterviewpro.Repository.CollegeTypeRepo;
import com.aiinterviewpro.Repository.LoginRepo;
import com.aiinterviewpro.Repository.StaffDetailsRepo;
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
    private final CollegeRepo collegeRepo ;
    private final LoginRepo loginRepo;
    private final PasswordEncoder passwordEncoder;
    private final CollegeTypeRepo collegeTypeRepo;

    @Transactional
    public void registerCollege(CollegeRegistrationRequest dto) {
        validateCollegeRegistration(dto);

        // Map enum to CollegeType entity
        CollegeType collegeType = collegeTypeRepo.findByName(dto.getCollegeType().name())
                .orElseThrow(() -> new IllegalArgumentException("Invalid college type"));

        College college = new College();
        college.setCollegeName(dto.getCollegeName());
        college.setCollegeType(collegeType);
        college.setAffiliationType(AffiliationType.valueOf(dto.getAffiliationType()));
        college.setCounselingCode(dto.getCounselingCode());
        college.setWebsite(dto.getWebsite());
        college.setEmail(dto.getOfficialEmail());
        college = collegeRepo.save(college);

        Login login = new Login();
        login.setEmail(dto.getUsername());
        login.setPassword(passwordEncoder.encode(dto.getPassword()));
        login.setIsActive(true);
        login.setCreatedAt(LocalDateTime.now());
        login = loginRepo.save(login);

        StaffDetails staff = new StaffDetails();
        staff.setStaffName(dto.getAdminName());
        staff.setEmail(dto.getAdminEmail());
        staff.setPhoneNumber(dto.getPhone());
        staff.setCollege(college);
        staff.setIsActive(true);
        staff.setLogin(login);
        staffDetailsRepo.save(staff);
    }

    private void validateCollegeRegistration(CollegeRegistrationRequest dto) {
        if (dto.getCollegeName() == null || dto.getCollegeType() == null || dto.getAffiliationType() == null ||
                dto.getCounselingCode() == null || dto.getOfficialEmail() == null ||
                dto.getAdminName() == null || dto.getAdminEmail() == null ||
                dto.getUsername() == null || dto.getPassword() == null) {
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
        if (collegeRepo.existsByOfficialEmail(dto.getOfficialEmail())) {
            throw new IllegalArgumentException("College with this official email already exists.");
        }
        if (staffDetailsRepo.existsByEmail(dto.getAdminEmail())) {
            throw new IllegalArgumentException("Admin email already exists.");
        }
        if (collegeRepo.existsByCollegeEmail(dto.getAdminEmail())) {
            throw new RuntimeException("Admin email already used as a college email");
        }
        if (dto.getPhone() != null && staffDetailsRepo.existsByPhone(dto.getPhone())) {
            throw new IllegalArgumentException("Admin phone already exists.");
        }
        if (loginRepo.existsByUsername(dto.getUsername())) {
            throw new IllegalArgumentException("Username already taken.");
        }
    }

}

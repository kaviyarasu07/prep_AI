package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.CollegeRegistrationRequest;
import com.aiinterviewpro.Entity.RequestCollegeLogin;
import com.aiinterviewpro.Entity.RequestedCollegeAdmin;
import com.aiinterviewpro.Entity.RequestedCollegeDetails;
import com.aiinterviewpro.Enum.AffiliationType;
import com.aiinterviewpro.Enum.CollegeType;
import com.aiinterviewpro.Repository.ReqCollegeAdminRepo;
import com.aiinterviewpro.Repository.ReqCollegeDetailsRepo;
import com.aiinterviewpro.Repository.ReqCollegeLoginRepo;
import com.aiinterviewpro.Util.ValidationUtil;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class CollegeRegistrationService {
    private final ReqCollegeAdminRepo collegeAdminRepo;
    private final ReqCollegeDetailsRepo collegeDetailsRepo;
    private final ReqCollegeLoginRepo collegeLoginRepo;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void registerCollege(CollegeRegistrationRequest dto) {

        validateCollegeRegistration(dto);

        RequestedCollegeDetails collegeDetails = new RequestedCollegeDetails();
        collegeDetails.setCollegeName(dto.getCollegeName());
        collegeDetails.setCollegeType(CollegeType.valueOf(dto.getCollegeType()));
        collegeDetails.setAffiliationType(AffiliationType.valueOf(dto.getAffiliationType()));
        collegeDetails.setCounselingCode(dto.getCounselingCode());
        collegeDetails.setWebsite(dto.getWebsite());
        collegeDetails.setOfficialEmail(dto.getOfficialEmail());
        collegeDetails = collegeDetailsRepo.save(collegeDetails);

        RequestedCollegeAdmin collegeAdmin = new RequestedCollegeAdmin();
        collegeAdmin.setFullName(dto.getAdminName());
        collegeAdmin.setEmail(dto.getAdminEmail());
        collegeAdmin.setPhone(dto.getPhone());
        collegeAdmin.setCollegeId(collegeDetails);
        collegeAdmin.setIsActive(true);
        collegeAdmin.setCreatedAt(LocalDateTime.now());
//        collegeAdmin = collegeAdminRepo.save(collegeAdmin);

        RequestCollegeLogin collegeLogin = new RequestCollegeLogin();
        collegeLogin.setUsername(dto.getUsername());
        collegeLogin.setPassword(passwordEncoder.encode(dto.getPassword()));
//        collegeLogin.setAdmin(collegeAdmin);
        collegeLogin.setIsActive(true);
        collegeLogin.setCreatedTime(LocalDateTime.now());
        collegeLoginRepo.save(collegeLogin);
        collegeAdmin.setLogin(collegeLogin);

         collegeAdminRepo.save(collegeAdmin);

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
            throw new IllegalArgumentException("Password must be at least 8 characters long.");
        }
        if (!ValidationUtil.isValidPhone(dto.getPhone())) {
            throw new IllegalArgumentException("Invalid phone number.");
        }

        if (collegeDetailsRepo.existsByCollegeName(dto.getCollegeName())) {
            throw new IllegalArgumentException("College with this name already exists.");
        }
        if (collegeDetailsRepo.existsByCounselingCode(dto.getCounselingCode())) {
            throw new IllegalArgumentException("College with this counseling code already exists.");
        }
        if (collegeDetailsRepo.existsByOfficialEmail(dto.getOfficialEmail())) {
            throw new IllegalArgumentException("College with this official email already exists.");
        }
        if (collegeAdminRepo.existsByEmail(dto.getAdminEmail())) {
            throw new IllegalArgumentException("Admin email already exists.");
        }
        if (collegeDetailsRepo.existsByCollegeEmail(dto.getAdminEmail())) {
            throw new RuntimeException("Admin email already used as a college email");
        }
        if (dto.getPhone() != null && collegeAdminRepo.existsByPhone(dto.getPhone())) {
            throw new IllegalArgumentException("Admin phone already exists.");
        }
        if (collegeLoginRepo.existsByUsername(dto.getUsername())) {
            throw new IllegalArgumentException("Username already taken.");
        }
    }

}

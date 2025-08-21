package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.SaRequestCollegeDTO;
import com.aiinterviewpro.Entity.College;
import com.aiinterviewpro.Repository.CollegeRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaRequestedColService {
    private final CollegeRepo collegeRepo;

    public SaRequestedColService(CollegeRepo collegeRepo) {
        this.collegeRepo = collegeRepo;
    }

    // Fetch all requested colleges with correct actions
    public List<SaRequestCollegeDTO> getRequestedColleges() {
        return collegeRepo.findAll().stream()
                .map(this::mapToDtoWithActions)
                .collect(Collectors.toList());
    }
    //update
    // Update the college status
    public boolean updateCollegeStatus(Integer id, String status) {
        return collegeRepo.findById(id).map(c -> {
            c.setStatus(status);
            collegeRepo.save(c);
            return true;
        }).orElse(false);
    }

    // Map entity to DTO with actions
    private SaRequestCollegeDTO mapToDtoWithActions(College c) {
        SaRequestCollegeDTO dto = mapToDto(c);

        if ("Pending".equalsIgnoreCase(c.getStatus())) {
            dto.setActions(List.of("Approve", "Reject", "View"));
        } else {
            dto.setActions(List.of("View"));
        }

        return dto;
    }

    // Map entity to DTO without actions
    private SaRequestCollegeDTO mapToDto(College c) {
        SaRequestCollegeDTO dto = new SaRequestCollegeDTO();
        dto.setCollegeName(c.getName());
        dto.setType(c.getDegreeType());
        dto.setUniversityType(c.getAffiliatedTo());
        dto.setCounselingCode(c.getCode());
        dto.setDateRequested(c.getCreatedAt().toLocalDate());
        dto.setStatus(c.getStatus());
        return dto;
    }
}


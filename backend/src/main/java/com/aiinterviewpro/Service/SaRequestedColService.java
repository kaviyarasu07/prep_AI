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

    public List<SaRequestCollegeDTO> getRequestedColleges() {
        return collegeRepo.findAll().stream()
                .map(this::mapToDtoWithActions)
                .collect(Collectors.toList());
    }



    private SaRequestCollegeDTO mapToDtoWithActions(College c) {
        SaRequestCollegeDTO dto = mapToDto(c);
        List<String> actions;
        switch (c.getStatus()) {
            case "Pending":
                actions = List.of("Approve", "Reject", "View");
                break;
            case "Approved":
            case "Rejected":
                actions = List.of("View");
                break;
            default:
                actions = List.of();
        }
        dto.setActions(actions);
        return dto;
    }

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

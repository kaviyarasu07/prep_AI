package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.SaRequestCollegeDTO;
import com.aiinterviewpro.Service.SaRequestedColService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/request")
public class SaRequestColController {

    private final SaRequestedColService saRequestedColService;

    public SaRequestColController(SaRequestedColService service) {
        this.saRequestedColService = service;
    }

    @GetMapping("/college")
    public List<SaRequestCollegeDTO> fetchAllRequests() {
        return saRequestedColService.getRequestedColleges();
    }

}

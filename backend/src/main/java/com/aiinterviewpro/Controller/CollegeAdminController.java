package com.aiinterviewpro.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aiinterviewpro.DTO.CollegeAdminSummaryDto;
import com.aiinterviewpro.Service.CollegeAdminSummaryService;
@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping(value="/ca/dashBoard")

public class CollegeAdminController {
	@Autowired
	private CollegeAdminSummaryService summaryService;
	
	@GetMapping("/college/admin")
	public ResponseEntity<CollegeAdminSummaryDto> getSummary(){
		return ResponseEntity.ok(summaryService.getCollegeAdminSummaryDto());
		
	}
	

}

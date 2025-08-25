package com.aiinterviewpro.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aiinterviewpro.DTO.CollegeAdminSummaryDto;
import com.aiinterviewpro.Repository.DepartmentRepo;
import com.aiinterviewpro.Repository.RoleRepo;
import com.aiinterviewpro.Repository.StudentDetailsRepo;

@Service

public class CollegeAdminSummaryService {
	
	@Autowired 
	private StudentDetailsRepo studentdetailsrepo;
	
	@Autowired
	private DepartmentRepo departmentrepo;;
	
	@Autowired 
	private RoleRepo rolerepo;
	
	public CollegeAdminSummaryDto getCollegeAdminSummaryDto() {
		CollegeAdminSummaryDto dto = new CollegeAdminSummaryDto();
		dto.setTotalStudents(studentdetailsrepo.countTotalStudents());
		dto.setTotalDepartments(departmentrepo.countTotalDepartments());
		dto.setTotalDepartmentAdmins(rolerepo.countTotalDepartmentAdmins());
		
         return dto;
		
		
	}
 
}

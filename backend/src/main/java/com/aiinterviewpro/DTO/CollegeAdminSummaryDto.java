package com.aiinterviewpro.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CollegeAdminSummaryDto {

	private int totalDepartments;

	public int getTotalStudents() {
		return totalStudents;
	}

	public void setTotalStudents(int totalStudents) {
		this.totalStudents = totalStudents;
	}

	private int totalStudents;

	public int getTotalDepartments() {
		return totalDepartments;
	}

	public void setTotalDepartments(int totalDepartments) {
		this.totalDepartments = totalDepartments;
	}

	public int getTotalDepartmentAdmins() {
		return totalDepartmentAdmins;
	}

	public void setTotalDepartmentAdmins(int totalDepartmentAdmins) {
		this.totalDepartmentAdmins = totalDepartmentAdmins;
	}

	private int totalDepartmentAdmins;
}
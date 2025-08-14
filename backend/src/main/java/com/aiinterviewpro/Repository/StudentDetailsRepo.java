package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentDetailsRepo extends JpaRepository<StudentDetails, Integer> {

   @Query("SELECT COUNT(s) FROM StudentDetails s WHERE s.departmentName = :departmentName")
    Long getTotalStudentsByDepartment(String departmentName);
}

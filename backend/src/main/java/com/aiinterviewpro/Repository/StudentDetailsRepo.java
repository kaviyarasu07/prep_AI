package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StudentDetailsRepo extends JpaRepository<StudentDetails, Integer> {
      // total student count based on department
    @Query("SELECT COUNT(s) FROM StudentDetails s WHERE s.department.departmentName = :deptName")
    long countStudentsByDeptName(@Param("deptName") String deptName);

    //filter by year
    List<StudentDetails> findByYearOfStudy(String yearOfStudy);

    //Department based get student

    List<StudentDetails> findByDepartment_DepartmentName(String departmentName);
}

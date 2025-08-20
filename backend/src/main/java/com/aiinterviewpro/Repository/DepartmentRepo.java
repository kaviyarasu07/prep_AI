package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Department;
import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface DepartmentRepo extends JpaRepository<Department, Integer> {

    @Query("SELECT s FROM StaffDetails s " + "WHERE s.department.id = :departmentId AND s.role.id = 3")
    Optional<StaffDetails> findDepartmentAdmin(@Param("departmentId") Integer departmentId);

    @Query("SELECT d FROM Department d " + "JOIN FETCH d.college " + "JOIN FETCH d.departmentMaster " + "WHERE d.id = :departmentId")
    Department findDepartmentWithCollegeAndMaster(@Param("departmentId") Integer departmentId);

}

package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StaffDetailsRepo extends JpaRepository<StaffDetails, Integer> {

    @Query("SELECT s FROM StaffDetails s " + "WHERE s.department.id = :departmentId AND s.role.id = 3")
    Optional<StaffDetails> findDepartmentAdmin(@Param("departmentId") Integer departmentId);


}

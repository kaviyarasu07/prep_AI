package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StaffDetailsRepo extends JpaRepository<StaffDetails, Integer> {
    List<StaffDetails> findByDepartmentId(int departmentId);
}

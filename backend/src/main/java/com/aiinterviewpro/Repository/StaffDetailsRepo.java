package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffDetailsRepo extends JpaRepository<StaffDetails, Integer> {
}

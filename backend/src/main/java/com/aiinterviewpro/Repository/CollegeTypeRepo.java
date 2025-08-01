package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.CollegeType;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollegeTypeRepo extends JpaRepository<CollegeType, Integer> {
}

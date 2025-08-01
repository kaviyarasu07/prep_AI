package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.College;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollegeRepo extends JpaRepository<College, Integer> {
}

package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.CollegeType;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CollegeTypeRepo extends JpaRepository<CollegeType, Integer> {
    Optional<CollegeType> findByName(String name);

}

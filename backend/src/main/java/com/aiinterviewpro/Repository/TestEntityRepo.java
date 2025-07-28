package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestEntityRepo extends JpaRepository <TestEntity, Integer>{
}

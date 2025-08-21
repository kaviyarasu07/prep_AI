package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.DepartmentMaster;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepartmentMasterRepo extends JpaRepository<DepartmentMaster, Integer> {


    Optional<DepartmentMaster> findByName(String name);
}

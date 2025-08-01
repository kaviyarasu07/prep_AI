package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.DepartmentMaster;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentMasterRepo extends JpaRepository<DepartmentMaster, Integer> {
}

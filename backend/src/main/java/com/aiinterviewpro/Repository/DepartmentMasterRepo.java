package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.DepartmentMaster;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DepartmentMasterRepo extends JpaRepository<DepartmentMaster, Integer> {
    List<DepartmentMaster> findByDepartmentName(String departmentName);
}

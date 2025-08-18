package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Department;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepartmentRepo extends JpaRepository<Department, Integer> {
    Optional<Department> findByDepartmentMasterId(Integer id);

    Optional<Department> findByCollege_IdAndDepartmentMaster_Id(Integer collegeId, Integer departmentMasterId);
}

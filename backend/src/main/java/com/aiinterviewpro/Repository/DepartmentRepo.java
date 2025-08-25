package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Department;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepo extends JpaRepository<Department, Integer> {

}

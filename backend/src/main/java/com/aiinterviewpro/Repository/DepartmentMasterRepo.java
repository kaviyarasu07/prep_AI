package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.DepartmentMaster;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DepartmentMasterRepo extends JpaRepository<DepartmentMaster, Integer> {


    Optional<DepartmentMaster> findByDepartmentName(String departmentName);

    //get department name only
    @Query("SELECT d.departmentName FROM DepartmentMaster d")
    List<String> findAllDepartmentNames();
}

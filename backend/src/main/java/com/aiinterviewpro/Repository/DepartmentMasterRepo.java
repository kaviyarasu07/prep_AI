package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.DepartmentMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface DepartmentMasterRepo extends JpaRepository<DepartmentMaster, Integer> {
    List<DepartmentMaster> findByDepartmentName(String departmentName);

    @Modifying
    @Transactional
    @Query("UPDATE DepartmentMaster dm SET dm.departmentName = :departmentName, dm.departmentCode = :departmentCode, dm.createdAt = :createdAt WHERE dm.id = :id")
    void updateDepartmentDetails(@Param("id") Integer id,
                                 @Param("departmentName") String departmentName,
                                 @Param("departmentCode") String departmentCode,
                                 @Param("createdAt") LocalDateTime createdAt);


}

package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.StaffDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StaffDetailsRepo extends JpaRepository<StaffDetails, Integer> {
    List<StaffDetails> findByDepartmentId(int departmentId);
    @Modifying
    @Query(value = """
        UPDATE tb_staff_details
        SET staff_name = :adminName
        WHERE department_id = :departmentId
          AND role_id = :roleId
    """, nativeQuery = true)
    int updateAdminNameByDepartment(
            @Param("departmentId") int id,
            @Param("roleId") int roleId,
            @Param("adminName") String adminName
    );
}

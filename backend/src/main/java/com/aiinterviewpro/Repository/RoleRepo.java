package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Role;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RoleRepo extends JpaRepository<Role, Integer> {
    @Query(value = "SELECT COUNT(*) FROM tb_role", nativeQuery = true)
    int countTotalDepartmentAdmins();

    Optional<Role> findByName(String departmentAdmin);
}

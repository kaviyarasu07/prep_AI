package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Role;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Integer> {
}

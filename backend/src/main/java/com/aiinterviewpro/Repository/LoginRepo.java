package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Login;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepo extends JpaRepository<Login, Integer> {
}

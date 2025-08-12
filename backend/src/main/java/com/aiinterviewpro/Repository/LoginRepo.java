package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Login;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoginRepo extends JpaRepository<Login, Integer> {
    Optional<Login> findByEmail(String email);
    boolean existsByUsername(String username);
}

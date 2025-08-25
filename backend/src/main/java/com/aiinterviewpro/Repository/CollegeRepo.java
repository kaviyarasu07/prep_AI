package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.College;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CollegeRepo extends JpaRepository<College, Integer> {
    boolean existsByCollegeName(String name);
    boolean existsByCounselingCode(String code);
    boolean existsByEmail(String email);
    @Query(value = "SELECT CASE WHEN COUNT(*) > 0 THEN TRUE ELSE FALSE END FROM tb_college WHERE contact_email = ?1", nativeQuery = true)
    boolean existsByCollegeEmail(String email);
}

package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.College;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CollegeRepo extends JpaRepository<College, Integer> {
	
    boolean existsByCollegeName(String name);
    boolean existsByCounselingCode(String code);
//    boolean existsByEmail(String email);
@Query("SELECT COUNT(c) > 0 FROM College c WHERE c.email = :email")
Boolean existsByCollegeEmail(@Param("email") String email);
}

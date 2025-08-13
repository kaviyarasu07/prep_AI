package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.College;
import com.aiinterviewpro.Entity.CollegeType;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CollegeRepo extends JpaRepository<College, Integer> {
    // 1. Total Registration Requests (all records)
    @Query(value = "SELECT COUNT(*) FROM tb_college", nativeQuery = true)
    long getTotalRequests();

    // 2. Total Colleges Onboarded (Approved only)
    @Query(value = "SELECT COUNT(*) FROM tb_college c WHERE LOWER(c.status) = LOWER('Approved')", nativeQuery = true)
    long getTotalOnboarded();

    // 3. Engineering Colleges Count (Approved only)
    @Query(value = """
        SELECT COUNT(*) 
        FROM tb_college c 
        JOIN tb_college_type t ON c.college_type = t.id
        WHERE LOWER(t.name) = LOWER('Engineering') 
          AND LOWER(c.status) = LOWER('Approved')
        """, nativeQuery = true)
    long getEngineeringCount();

    // 4. Arts Colleges Count (Approved only)
    @Query(value = """
        SELECT COUNT(*) 
        FROM tb_college c 
        JOIN tb_college_type t ON c.college_type = t.id
        WHERE LOWER(t.name) = LOWER('Arts') 
          AND LOWER(c.status) = LOWER('Approved')
        """, nativeQuery = true)
    long getArtsCount();

    // 5. Optional — JPQL version for dynamic type
    @Query("SELECT COUNT(c) FROM College c JOIN c.collegeType t " +
            "WHERE LOWER(t.name) = LOWER(:typeName) " +
            "AND LOWER(c.status) = LOWER('Approved')")
    long countApprovedByType(@Param("typeName") String typeName);
}


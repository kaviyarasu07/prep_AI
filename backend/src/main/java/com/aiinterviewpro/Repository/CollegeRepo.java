package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.College;
import com.aiinterviewpro.Entity.CollegeType;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CollegeRepo extends JpaRepository<College, Integer> {
    @Query(value="SELECT COUNT(*) FROM tb_college  c", nativeQuery= true)
    long getTotalColleges();

    @Query(value ="SELECT COUNT(*) FROM tb_college c WHERE LOWER(c.tb_college_type.name) = LOWER('Engineering')",nativeQuery = true)
    long getEngineeringCount();

    @Query(value ="SELECT COUNT(*) FROM tb_college c WHERE LOWER(c.tb_college_type.name) = LOWER('Arts')",nativeQuery = true)
    long getArtsCount();




    @Query("SELECT COUNT(c) FROM College c JOIN c.collegeType t WHERE LOWER(t.name) = LOWER(:typeName)")
    long countByType(@Param("typeName") String typeName);
}

package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.TotalSummary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface TotalSummaryRepo extends JpaRepository<TotalSummary,Integer> {

    Optional<TotalSummary> findByDepartmentId(int departmentId);
    List<TotalSummary>findByCollegeId(int collegeId);
}

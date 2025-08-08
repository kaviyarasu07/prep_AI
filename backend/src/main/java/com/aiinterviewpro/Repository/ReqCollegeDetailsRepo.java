package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.RequestedCollegeDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReqCollegeDetailsRepo extends JpaRepository<RequestedCollegeDetails,Integer> {
    boolean existsByCollegeName(String name);
    boolean existsByCounselingCode(String code);
    boolean existsByOfficialEmail(String email);

    @Query(value = "SELECT CASE WHEN COUNT(*) > 0 THEN TRUE ELSE FALSE END FROM tb_requested_college_details WHERE official_email = ?", nativeQuery = true)
    boolean existsByCollegeEmail(String email);
}


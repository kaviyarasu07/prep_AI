package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.RequestedCollegeAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReqCollegeAdminRepo extends JpaRepository<RequestedCollegeAdmin,Integer> {
    boolean existsByEmail(String email);
    boolean existsByPhone(String phone);
}

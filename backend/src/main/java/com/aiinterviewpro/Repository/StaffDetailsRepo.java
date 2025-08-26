package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.StaffDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StaffDetailsRepo extends JpaRepository<StaffDetails, Integer> {
    Optional<StaffDetails> findByDepartmentIdAndRoleId(Integer id, Integer roleId);

    List<StaffDetails> findByDepartmentId(Integer id);

    void deleteByDepartmentId(Integer id);

    boolean existsByEmail(String email);
    boolean existsByPhoneNumber(String phoneNumber);
}
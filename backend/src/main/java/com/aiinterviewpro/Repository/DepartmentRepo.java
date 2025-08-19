package com.aiinterviewpro.Repository;

import com.aiinterviewpro.DTO.RegisteredDepartmentsDto;
import com.aiinterviewpro.Entity.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DepartmentRepo extends JpaRepository<Department, Integer> {
    Optional<Department> findByDepartmentMasterId(Integer id);

    Optional<Department> findByCollege_IdAndDepartmentMaster_Id(Integer collegeId, Integer departmentMasterId);

    @Query(
            value = """
    SELECT
      d.id AS id,
      m.department_name AS departmentName,
      m.department_code AS departmentCode,
      COUNT(s.student_id) AS totalStudents,
      SUM(CASE WHEN s.is_active = TRUE THEN 1 ELSE 0 END) AS activeStudents,
      d.is_active AS isActive,
      d.created_at AS creationDate
    FROM tb_department d
    JOIN tb_department_master m ON d.department_master_id = m.id
    LEFT JOIN tb_student_details s ON s.department_id = d.id
    WHERE d.is_active = TRUE
    GROUP BY d.id, m.department_name, m.department_code, d.is_active, d.created_at
    """,
            countQuery = """
    SELECT COUNT(DISTINCT d.id)
    FROM tb_department d
    JOIN tb_department_master m ON d.department_master_id = m.id
    WHERE d.is_active = TRUE
    """,
            nativeQuery = true
    )
    Page<Object[]> getRegisteredDepartments(Pageable pageable);
    Optional<Department> findById(Integer id);

}

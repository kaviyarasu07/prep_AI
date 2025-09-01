package com.aiinterviewpro.Repository;

import com.aiinterviewpro.DTO.RegisteredDepartmentsDto;
import com.aiinterviewpro.Entity.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

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


	   @Query(value = "SELECT COUNT(*) FROM tb_department", nativeQuery = true)
		int countTotalDepartments();

	@Query(value = """
    SELECT d.id,
           dm.department_name AS department_name,
           COALESCE(GROUP_CONCAT(DISTINCT sd.staff_name SEPARATOR ', '), 'Unassigned') AS assignedAdmins,
           COUNT(DISTINCT std.student_id) AS numberOfStudents,
           CASE WHEN d.is_active = 1 THEN 'Active' ELSE 'Inactive' END AS status
    FROM tb_department d
    JOIN tb_department_master dm ON d.department_master_id = dm.id
    LEFT JOIN tb_staff_details sd 
           ON sd.department_id = d.id 
          AND sd.is_active = 1
          AND sd.role_id = (
              SELECT id FROM tb_role WHERE LOWER(name) = LOWER('Department Admin') LIMIT 1
          )
    LEFT JOIN tb_student_details std 
           ON std.department_id = d.id
    WHERE d.is_active = 1
    GROUP BY d.id, dm.department_name, d.is_active
    ORDER BY dm.department_name ASC
    """,
			countQuery = """
    SELECT COUNT(DISTINCT d.id)
    FROM tb_department d
    WHERE d.is_active = 1
    """,
			nativeQuery = true)
	Page<Object[]> getActiveDepartmentSummary(Pageable pageable);
    Optional<Department> findById(Integer id);

}

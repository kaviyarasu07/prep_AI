package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface DepartmentRepo extends JpaRepository<Department, Integer> {
	@Query(value = "SELECT COUNT(*) FROM tb_department", nativeQuery = true)
	int countTotalDepartments();

	@Query(value = """
    SELECT d.id,
        dm.department_name AS department_name,
        STRING_AGG(DISTINCT sd.staff_name, ' ') AS assigned_admin,
        COUNT(DISTINCT std.student_id) AS number_of_students,
        'Active' AS status
    FROM tb_department d
    JOIN tb_department_master dm ON d.department_master_id = dm.id
    JOIN tb_college c ON d.college_id = c.id
    JOIN tb_staff_details sd ON sd.department_id = d.id AND sd.college_id = c.id
    JOIN tb_role r ON sd.role_id = r.id AND LOWER(r.name) = 'department_admin'
    LEFT JOIN tb_student_details std ON std.department_id = d.id
    WHERE 
        d.is_active = true AND
        c.is_active = true AND
        sd.is_active = true
    GROUP BY d.id, dm.department_name
    
    """,
			countQuery = """
    SELECT COUNT(DISTINCT d.id)
    FROM tb_department d
    JOIN tb_college c ON d.college_id = c.id
    JOIN tb_staff_details sd ON sd.department_id = d.id AND sd.college_id = c.id
    JOIN tb_role r ON sd.role_id = r.id AND LOWER(r.name) = 'department_admin'
    WHERE 
        d.is_active = true AND
        c.is_active = true AND
        sd.is_active = true
    """,
			nativeQuery = true)
	Page<Object[]> getActiveDepartmentSummary(
			Pageable pageable);

	Optional<Department> findById(Integer id);
}

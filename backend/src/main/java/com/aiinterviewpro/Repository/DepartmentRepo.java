package com.aiinterviewpro.Repository;

import com.aiinterviewpro.DTO.DepartmentSummaryDto;
import com.aiinterviewpro.Entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository

public interface DepartmentRepo extends JpaRepository<Department, Integer> {
	@Query(value = "SELECT COUNT(*) FROM tb_department", nativeQuery = true)
	int countTotalDepartments();

	@Query(value = """
    SELECT d.id,
        dm.department_name AS DepartmentName,
        STRING_AGG(Distinct sd.staff_name, ' ') AS AssignedAdmin,
        COUNT(DISTINCT std.student_id) AS NumberOfStudents,
        'Active'  AS status
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
    """, nativeQuery = true)
	List<Object[]> getActiveDepartmentSummary();

	@Modifying
	@Query(value = """
        UPDATE tb_department d
        SET department_master_id = dm.id,
            is_active = :status
        FROM tb_department_master dm
        WHERE d.id = :departmentId
          AND dm.department_name = :departmentName
    """, nativeQuery = true)
	int updateDepartmentSummary(
			@Param("departmentId") int departmentId,
			@Param("departmentName") String departmentName,
			@Param("status") String status
	);



//	@Modifying
//	@Query(value = """
//        DELETE FROM tb_department d
//        USING tb_department_master dm, tb_staff_details sd
//        WHERE d.department_master_id = dm.id
//          AND d.staff_id = sd.id
//          AND d.id = :departmentId
//          AND dm.department_name = :departmentName
//          AND sd.id = :staffId
//    """, nativeQuery = true)
//	int deleteDepartmentSummary(
//			@Param("departmentId") Long departmentId,
//			@Param("departmentName") String departmentName,
//			@Param("staffId") Long staffId
//	);



}

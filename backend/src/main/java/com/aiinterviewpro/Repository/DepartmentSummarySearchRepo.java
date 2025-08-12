package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentSummarySearchRepo extends JpaRepository<Department,Integer> {

   @Query(value = """
            SELECT
    d.id AS departmentId,
    dm.department_name AS departmentName,
    sd.staff_name AS assignedAdmins,
    COALESCE(COUNT(DISTINCT st.student_id), 0) AS numberOfStudents,
    CASE WHEN d.is_active = true THEN 'Active' ELSE 'Inactive' END AS status,
    sd.role_id AS roleId
    FROM tb_department d
    JOIN tb_department_master dm ON d.department_master_id = dm.id
    LEFT JOIN tb_staff_details sd
    ON sd.department_id = d.id
    AND sd.role_id = (SELECT id FROM tb_role WHERE name = 'DEPARTMENT_ADMIN')
    LEFT JOIN tb_student_details st ON st.department_id = d.id
    WHERE (:departmentName IS NULL OR LOWER(dm.department_name) LIKE LOWER(CONCAT('%', :departmentName, '%')))
    AND (:assignedAdmins IS NULL OR LOWER(sd.staff_name) LIKE LOWER(CONCAT('%', :assignedAdmins, '%')))
    AND (:status IS NULL OR
            (:status = 'Active' AND d.is_active = true) OR
       (:status = 'Inactive' AND d.is_active = false))
    GROUP BY d.id, dm.department_name, sd.staff_name, sd.role_id, d.is_active
    HAVING (:numberOfStudents IS NULL OR COUNT(DISTINCT st.student_id) = :numberOfStudents)
    ORDER BY dm.department_name
    """ , nativeQuery = true)

    List<Object[]> searchDepartmentSummary(
            @Param("departmentName") String departmentName,
            @Param("assignedAdmins") String assignedAdmins,
            @Param("status") String status,
            @Param("numberOfStudents") Integer numberOfStudents // Changed to Integer
    );
}

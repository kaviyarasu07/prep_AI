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
                                                   GROUP_CONCAT(DISTINCT sd.staff_name ORDER BY sd.staff_name SEPARATOR ' ') AS assignedAdmins,
                                                   COUNT(DISTINCT st.student_id) AS numberOfStudents,
                                                   CASE WHEN d.is_active = 1 THEN 'Active' ELSE 'Inactive' END AS status
                                               FROM tb_department d
                                               JOIN tb_department_master dm ON d.department_master_id = dm.id
                                               LEFT JOIN tb_staff_details sd
                                                      ON sd.department_id = d.id
                                                     AND sd.role_id = (SELECT id FROM tb_role WHERE LOWER(name) = LOWER('department admin'))
                                               LEFT JOIN tb_student_details st ON st.department_id = d.id
                                               WHERE (:departmentName IS NULL OR LOWER(dm.department_name) LIKE LOWER(CONCAT('%', :departmentName, '%')))
                                                 AND (:status IS NULL OR
                                                        (:status = 'Active' AND d.is_active = 1) OR
                                                        (:status = 'Inactive' AND d.is_active = 0))
                                               GROUP BY d.id, dm.department_name, d.is_active
                                               HAVING (:assignedAdmins IS NULL OR LOWER(GROUP_CONCAT(DISTINCT sd.staff_name SEPARATOR ' ')) LIKE LOWER(CONCAT('%', :assignedAdmins, '%')))
                                                  AND (:numberOfStudents IS NULL OR COUNT(DISTINCT st.student_id) = :numberOfStudents)
                                               ORDER BY dm.department_name ASC
            """, nativeQuery = true)
    List<Object[]> searchDepartmentSummary(
            @Param("departmentName") String departmentName,
            @Param("assignedAdmins") String assignedAdmins,
            @Param("status") String status,
            @Param("numberOfStudents") Integer numberOfStudents
    );
}
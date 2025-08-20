package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RegisteredDepartmentsSearchRepo extends JpaRepository<Department,Integer> {
    @Query(value = """
           SELECT
           d.id,
           dm.department_name AS departmentName,
           dm.department_code AS departmentCode,
           COUNT(s.student_id) AS totalStudents,
           COUNT(CASE WHEN s.is_active = true THEN 1 END) AS activeStudents,
           d.is_active AS status
           FROM tb_department d
           JOIN tb_department_master dm ON d.department_master_id = dm.id
           LEFT JOIN tb_student_details s ON d.id = s.department_id
           WHERE (:departmentName IS NULL OR LOWER(dm.department_name) LIKE LOWER(CONCAT('%', :departmentName, '%')))
           AND (:departmentCode IS NULL OR LOWER(dm.department_code) LIKE LOWER(CONCAT('%', :departmentCode, '%')))
           AND (:status IS NULL OR d.is_active = :status)
           GROUP BY d.id, dm.department_name, dm.department_code, d.is_active
           HAVING (:totalStudents IS NULL OR COUNT(s.student_id) >= :totalStudents)
           AND (:activeStudents IS NULL OR COUNT(CASE WHEN s.is_active = true THEN 1 END) >= :activeStudents)
           
""", nativeQuery = true)
    List<Object[]> searchDepartmentDetails(
            @Param("departmentName") String departmentName,
            @Param("departmentCode") String departmentCode,
            @Param("totalStudents") Integer totalStudents,
            @Param("activeStudents") Integer activeStudents,
            @Param("status") Boolean status
    );

}

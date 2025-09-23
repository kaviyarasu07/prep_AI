package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StudentDetailsRepo extends JpaRepository<StudentDetails, Integer> {
    @Query(value = "SELECT COUNT(*) FROM tb_student_details", nativeQuery = true)
    int countTotalStudents();

    int countByDepartmentId(int id);

    int countTotalStudentsByDepartmentId(Integer id);

    int countByDepartmentIdAndIsActiveTrue(Integer id);

    int countByDepartment_id(int departmentId);

    @Query("SELECT COUNT(s) FROM StudentDetails s")
    Long getTotalStudents();


    int countByDepartment_Id(int id);

    @Query(value = "SELECT COUNT(*) FROM tb_student_details s " +

            "JOIN tb_department d ON s.department_id = d.id " +

            "JOIN tb_department_master m ON d.department_master_id = m.id " +

            "WHERE m.department_name = :departmentName",

            nativeQuery = true)
    long countByDepartmentName(@Param("departmentName") String departmentName);

}
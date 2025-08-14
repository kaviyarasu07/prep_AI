package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentDetailsRepo extends JpaRepository<StudentDetails, Integer> {
    @Query(value= "SELECT COUNT(*) FROM tb_student_details", nativeQuery = true)
    int countTotalStudents();

    int countByDepartmentId(int id);

    int countTotalStudentsByDepartmentId(Integer id);
}

package com.aiinterviewpro.Repository;

import com.aiinterviewpro.Entity.Mentor;
import com.aiinterviewpro.Entity.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MentorRepo extends JpaRepository<Mentor, Integer>
{

    @Query("SELECT s FROM StudentDetails s WHERE s.mentor IS NULL")
    List<StudentDetails> findStudentsWithoutMentor();

    // Top performing mentor
    @Query("SELECT m FROM Mentor m ORDER BY m.avg_cpa_of_students DESC")
    List<Mentor> findMentorsByPerformanceDesc();

    // Find the mentor by department
    @Query("SELECT m FROM Mentor m " + "JOIN StudentDetails s ON s.mentor.id = m.id " + "WHERE s.department.id = :departmentId")
    List<Mentor> findMentorsByDepartment(@Param("departmentId") Integer departmentId);

    // To fetch the details of mentor with em
    @Query("SELECT m FROM Mentor m WHERE m.email = :email OR m.name = :name")
    Optional<Mentor> findByEmailAndName(@Param("email") String email, @Param("name") String name);

}




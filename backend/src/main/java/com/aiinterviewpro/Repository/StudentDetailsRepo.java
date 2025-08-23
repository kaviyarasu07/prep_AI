package com.aiinterviewpro.Repository;

import com.aiinterviewpro.DTO.StudentDetailsDto;
import com.aiinterviewpro.Entity.StudentDetails;
import com.aiinterviewpro.Entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface StudentDetailsRepo extends JpaRepository<StudentDetails, Integer> {

    //Students without mentor
    @Query("SELECT s FROM StudentDetails s WHERE s.mentor IS NULL")
    List<StudentDetails> findStudentsWithoutMentor();

    // Student count per mentor
    @Query("SELECT m.id, COUNT(s) FROM StudentDetails s JOIN s.mentor m GROUP BY m.id")
    List<Object[]> findStudentCountsPerMentor();


    List<StudentDetails> findByMentorId(Integer mentorId);

}

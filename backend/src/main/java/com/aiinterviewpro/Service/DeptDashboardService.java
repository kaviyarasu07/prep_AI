//package com.aiinterviewpro.Service;
//
//import com.aiinterviewpro.DTO.DeptDashBoardDto;
//import com.aiinterviewpro.Repository.StudentDetailsRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class DeptDashboardService {
//
//    @Autowired
//    private StudentDetailsRepo studentDetailsRepo;
//
//    public DeptDashBoardDto getTotalStudents() {
//        Long count = studentDetailsRepo.getTotalStudents(); // lowercase 's'
//        return new DeptDashBoardDto(count);
//    }
//}

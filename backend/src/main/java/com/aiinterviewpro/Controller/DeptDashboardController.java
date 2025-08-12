package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.DeptDashBoardDto;
import com.aiinterviewpro.Service.DeptDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dept")
public class DeptDashboardController {

    @Autowired
    private DeptDashboardService deptDashboardService;

    @GetMapping("/dash/count")
    public DeptDashBoardDto getTotalStudents(){
    return deptDashboardService.getTotalStudents();
    }
}

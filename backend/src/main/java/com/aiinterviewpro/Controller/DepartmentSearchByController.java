package com.aiinterviewpro.Controller;


import com.aiinterviewpro.DTO.DepartmentSearchDto;
import com.aiinterviewpro.Service.RegisteredDepartmentSearchByService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/ca/search")
public class DepartmentSearchByController {
    @Autowired
    private RegisteredDepartmentSearchByService searchService;
    @GetMapping("/searchBy")
    public ResponseEntity<List<DepartmentSearchDto>>searchDepartments(
            @RequestParam(required = false)String departmentName,
            @RequestParam (required = false)String departmentCode,
            @RequestParam (required = false)Integer activeStudents,
            @RequestParam (required = false)Integer totalStudents,
            @RequestParam (required = false)Boolean status

    ){
        List<DepartmentSearchDto> results = searchService.searchDepartments(
                departmentName, departmentCode, activeStudents, totalStudents, status
        );
        return ResponseEntity.ok(results);
    }

}

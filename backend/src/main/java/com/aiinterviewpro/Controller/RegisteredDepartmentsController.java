package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.RegisteredDepartmentsDto;
import com.aiinterviewpro.Service.RegisteredDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value="/ca/registeredDepartment")

public class RegisteredDepartmentsController {
    @Autowired
    private RegisteredDepartmentService departmentService;

    @GetMapping("/getAll")
    public ResponseEntity<?> getRegisteredDepartments(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size


    ){
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, "departmentName"));

        Page<RegisteredDepartmentsDto> pageResult = departmentService.getRegisteredDepartments(pageable);
        Map<String, Object> response = new HashMap<>();
        response.put("content", pageResult.getContent());
        response.put("currentPage", pageResult.getNumber());
        response.put("pageSize", pageResult.getSize());
        response.put("totalItems", pageResult.getTotalElements());
        response.put("totalPages", pageResult.getTotalPages());
        response.put("isLast", pageResult.isLast());

        return ResponseEntity.ok(response);
    }


}







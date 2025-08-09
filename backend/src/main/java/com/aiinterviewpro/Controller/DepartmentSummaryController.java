package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.DepartmentSummaryDto;
import com.aiinterviewpro.Service.DepartmentSummaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="/department")

public class DepartmentSummaryController {

    @Autowired
    private DepartmentSummaryService departmentsummaryservice;

    @GetMapping("/getAll")
    public ResponseEntity<List<DepartmentSummaryDto>> getActiveDepartmentSummaries() {
        List<DepartmentSummaryDto> summaries = departmentsummaryservice.getActiveDepartmentSummaries();
        return ResponseEntity.ok(summaries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DepartmentSummaryDto> getDepartmentById(@PathVariable int id) {
        DepartmentSummaryDto dto = departmentsummaryservice.getDepartmentSummaryById(id);
        return ResponseEntity.ok(dto);

    }
    @PutMapping("/update")
    public ResponseEntity<String> updateDepartment(@RequestBody DepartmentSummaryDto dto) {
        departmentsummaryservice.updateDepartmentAndAdmin(dto);
        return ResponseEntity.ok("Department and Admin updated successfully.");
    }


}

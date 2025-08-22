package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.DepartmentSummaryDto;
import com.aiinterviewpro.DTO.UpdateRequestDto;
import com.aiinterviewpro.Service.DepartmentSummaryService;
import com.aiinterviewpro.util.Pagination;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping(value ="/department")

public class DepartmentSummaryController {

    @Autowired
    private DepartmentSummaryService departmentsummaryservice;


    @GetMapping("/getAll")
    public ResponseEntity<?> getActiveDepartmentSummaries(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(defaultValue = "department_name") String sortBy,
            @RequestParam(defaultValue = "asc") String direction

    ) {

        String mappedSortBy;
        switch (sortBy) {
            case "department_name" -> mappedSortBy = "dm.department_name";
            case "assignedAdmins" -> mappedSortBy = "sd.staff_name";
            case "numberOfStudents" -> mappedSortBy = "numberOfStudents";
            default -> mappedSortBy = "d.id"; // fallback
        }
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(direction), sortBy));
        Page<DepartmentSummaryDto> pageResult = departmentsummaryservice.getActiveDepartmentSummaries(pageable);

        Map<String, Object> response = new HashMap<>();
        response.put("content", pageResult.getContent());
        response.put("currentPage", pageResult.getNumber());
        response.put("pageSize", pageResult.getSize());
        response.put("totalItems", pageResult.getTotalElements());
        response.put("totalPages", pageResult.getTotalPages());
        response.put("isLast", pageResult.isLast());

        return ResponseEntity.ok(response);
    }


    @GetMapping("/{id}")
    public ResponseEntity<DepartmentSummaryDto> getDepartmentById(@PathVariable int id) {
        DepartmentSummaryDto dto = departmentsummaryservice.getDepartmentSummaryById(id);
        return ResponseEntity.ok(dto);

    }
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateDepartment(
            @PathVariable Integer id,
           @RequestBody UpdateRequestDto dto) {

        departmentsummaryservice.updateDepartmentAndAdmin(id, dto);
        return ResponseEntity.ok("Department and admin updated successfully.");
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(fe ->
                errors.put(fe.getField(), fe.getDefaultMessage()));
        return errors;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteDepartment(@PathVariable Integer id) {
        departmentsummaryservice.deleteDepartment(id);
        Map<String, String> response = Map.of("message", "Deleted successfully");
        return ResponseEntity.ok(response);
    }


}

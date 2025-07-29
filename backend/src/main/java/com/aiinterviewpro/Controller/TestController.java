package com.aiinterviewpro.Controller;

import com.aiinterviewpro.DTO.TestDto;
import com.aiinterviewpro.Service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
@CrossOrigin(origins = "*")
public class TestController {
    @Autowired
    private TestService service;

    @GetMapping("/{id}")
    public ResponseEntity<?> getDev(@PathVariable Integer id) {
        System.out.println("in cont" );
        try {
            TestDto dto = service.getDeveloperName(id);
            return ResponseEntity.ok(dto);
        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Developer not found ");
        }
    }

}

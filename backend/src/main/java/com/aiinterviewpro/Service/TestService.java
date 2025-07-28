package com.aiinterviewpro.Service;

import com.aiinterviewpro.DTO.TestDto;
import com.aiinterviewpro.Entity.TestEntity;
import com.aiinterviewpro.Repository.TestEntityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    @Autowired
    private TestEntityRepo repo;


    public TestDto getDeveloperName(Integer id) {
        TestEntity testEntity = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Developer not found with id: " + id));
        TestDto testDto = new TestDto();
        testDto.setName(testEntity.getName());
        testDto.setDomain(testEntity.getDomain());
       return testDto;
    }
}

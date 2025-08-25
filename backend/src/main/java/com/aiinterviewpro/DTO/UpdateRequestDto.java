package com.aiinterviewpro.DTO;

import lombok.Data;
import lombok.NonNull;

@Data
public class UpdateRequestDto {
    @NonNull
    private String departmentName;

    @NonNull
    private String assignedAdmins;


    private Boolean Status;

}

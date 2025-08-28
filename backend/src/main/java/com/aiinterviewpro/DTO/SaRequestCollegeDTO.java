package com.aiinterviewpro.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaRequestCollegeDTO {
    private Integer id;
    private String collegeName;
    private String type;
    private String affiliationType;
    private String counselingCode;
    private LocalDate dateRequested;
    private String status;
    private List<String> actions;


    // ✅ Getter & Setter for all fields
    public String getCollegeName() { return collegeName; }
    public void setCollegeName(String collegeName) { this.collegeName = collegeName; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getAffiliationType() {
        return affiliationType;
    }

    public void setAffiliationType(String affiliationType) {
        this.affiliationType = affiliationType;
    }

    public String getCounselingCode() { return counselingCode; }
    public void setCounselingCode(String counselingCode) { this.counselingCode = counselingCode; }

    public LocalDate getDateRequested() { return dateRequested; }
    public void setDateRequested(LocalDate dateRequested) { this.dateRequested = dateRequested; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public List<String> getActions() { return actions; }
    public void setActions(List<String> actions) { this.actions = actions; }
}

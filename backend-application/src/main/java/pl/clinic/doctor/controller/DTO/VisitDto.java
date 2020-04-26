package pl.clinic.doctor.controller.dto;

import pl.clinic.visit.model.Visit;
import pl.clinic.visit.model.VisitState;

import java.time.LocalDateTime;

public class VisitDto {
    // patient
    protected String patientFirstName;
    protected String patientLastName;
    // receptionist
    protected String receptionistFirstName;
    protected String receptionistLastName;
    // visit
    protected VisitState state;
    protected LocalDateTime registrationDate;

    public VisitDto(Visit visit) {
        this.patientFirstName = visit.getPatient().getFirstName();
        this.patientLastName = visit.getPatient().getLastName();
        this.receptionistFirstName = visit.getReceptionist().getFirstName();
        this.receptionistLastName = visit.getReceptionist().getLastName();
        this.state = visit.getState();
        this.registrationDate = visit.getRegistrationDate();
    }

    public String getPatientFirstName() {
        return patientFirstName;
    }

    public String getPatientLastName() {
        return patientLastName;
    }

    public String getReceptionistFirstName() {
        return receptionistFirstName;
    }

    public String getReceptionistLastName() {
        return receptionistLastName;
    }

    public VisitState getState() {
        return state;
    }

    public LocalDateTime getRegistrationDate() {
        return registrationDate;
    }
}

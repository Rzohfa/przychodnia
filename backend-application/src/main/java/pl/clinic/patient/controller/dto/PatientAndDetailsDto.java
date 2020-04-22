package pl.clinic.patient.controller.dto;

import pl.clinic.patient.model.Patient;

public class PatientAndDetailsDto {
    // from patient
    protected Long id;
    protected String firstName;
    protected String lastName;
    protected String peselNumber;
    // from userDetails
    protected String city;
    protected String streetAddress1;
    protected String streetAddress2;
    protected String zipCode;
    protected String state;
    protected String contactNumber;

    public PatientAndDetailsDto(Patient patient) {
        this.id = patient.getId();
        this.firstName = patient.getFirstName();
        this.lastName = patient.getLastName();
        this.peselNumber = patient.getPeselNumber();
        this.city = patient.getPersonDetails().getCity();
        this.streetAddress1 = patient.getPersonDetails().getStreetAddress1();
        this.streetAddress2 = patient.getPersonDetails().getStreetAddress2();
        this.zipCode = patient.getPersonDetails().getZipCode();
        this.state = patient.getPersonDetails().getState();
        this.contactNumber = patient.getPersonDetails().getContactNumber();
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPeselNumber() {
        return peselNumber;
    }

    public String getCity() {
        return city;
    }

    public String getStreetAddress1() {
        return streetAddress1;
    }

    public String getStreetAddress2() {
        return streetAddress2;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getState() {
        return state;
    }

    public String getContactNumber() {
        return contactNumber;
    }
}
package com.SpringApi.SpringApi.utils;

import com.SpringApi.SpringApi.model.City;
import com.SpringApi.SpringApi.model.Voivodeship;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
public class NewEmployeeDto {
    private String name;
    private String lastName;
    private String email;
    private String password;
    private Integer voivodeship;
    private Integer city;
}

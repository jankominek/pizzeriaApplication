package com.SpringApi.SpringApi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "city")
@Data
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "cityId")
    private Integer cityId;

    @Column(name = "cityName")
    private String cityName;

    @JsonBackReference
    @OneToMany(mappedBy = "city")
    private List<User> userList;

    @JsonBackReference
    @OneToMany(mappedBy = "city")
    private List<Employee> employeeList;
}

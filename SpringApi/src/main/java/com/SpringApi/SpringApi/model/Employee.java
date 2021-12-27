package com.SpringApi.SpringApi.model;

import com.SpringApi.SpringApi.utils.PersonType;

import javax.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer employeeId;

    @Column(name = "name")
    private String name;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @OneToOne()
    @JoinColumn(name = "voivodeshipId", referencedColumnName = "voivodeshipId")
    private Voivodeship voivodeship;

    @OneToOne()
    @JoinColumn(name = "cityId", referencedColumnName = "cityId")
    private City city;

    @Column(name = "typ")
    @Enumerated(EnumType.STRING)
    private PersonType type;

}

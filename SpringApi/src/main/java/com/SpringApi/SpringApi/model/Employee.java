package com.SpringApi.SpringApi.model;

import com.SpringApi.SpringApi.utils.PersonType;

import javax.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_employee;

    @Column(name = "name")
    private String name;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @OneToOne()
    @JoinColumn(name = "id_voivodeship", referencedColumnName = "id_voivodeship")
    private Voivodeship voivodeship;

    @OneToOne()
    @JoinColumn(name = "id_city", referencedColumnName = "id_city")
    private City city;

    @Column(name = "typ")
    @Enumerated(EnumType.STRING)
    private PersonType type;

}

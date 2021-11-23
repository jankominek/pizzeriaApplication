package com.SpringApi.SpringApi.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "city")
@Data
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_city")
    private Integer id_city;

    @Column(name = "city_name")
    private String city_name;

    @OneToOne(mappedBy = "city")
    private User user;
}

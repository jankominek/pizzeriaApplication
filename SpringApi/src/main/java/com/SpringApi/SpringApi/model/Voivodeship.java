package com.SpringApi.SpringApi.model;

import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "voivodeship")
@Data
public class Voivodeship {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_voivodeship")
    private Integer id_voivodeship;

    @Column(name = "voivodeship_name")
    private String voivodeship_name;

    @OneToOne(mappedBy = "voivodeship")
    private User user;
}

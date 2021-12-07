package com.SpringApi.SpringApi.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


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

    @OneToMany(mappedBy = "voivodeship")
    private List<User> userList;
}

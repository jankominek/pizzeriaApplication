package com.SpringApi.SpringApi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "voivodeship")
@Data
public class Voivodeship {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "voivodeshipId")
    private Integer voivodeshipId;

    @Column(name = "voivodeshipName")
    private String voivodeshipName;

    @JsonBackReference
    @OneToMany(mappedBy = "voivodeship")
    private List<User> userList;
}

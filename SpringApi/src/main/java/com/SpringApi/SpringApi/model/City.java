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
    @Column(name = "id_city")
    private Integer id_city;

    @Column(name = "city_name")
    private String city_name;

    @JsonBackReference
    @OneToMany(mappedBy = "city")
    private List<User> userList;
}

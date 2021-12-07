package com.SpringApi.SpringApi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Ingredient")
@Data
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_ingredient")
    private Integer id_ingredient;

    @Column(name = "ingredient_name")
    private String ingredient_name;

    @JsonBackReference
    @ManyToMany(mappedBy = "ingredients")
    List<Dish> dishes;

    @OneToMany(mappedBy = "ingredient")
    private List<Dish_modify> dishModifyList;
}

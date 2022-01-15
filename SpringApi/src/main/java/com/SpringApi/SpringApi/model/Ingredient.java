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
    @Column(name = "ingredientId")
    private Integer ingredientId;

    @Column(name = "ingredientName")
    private String ingredientName;

    @Column(name = "ingredientPrice")
    private Double ingredientPrice;

    @JsonBackReference
    @ManyToMany(mappedBy = "ingredients")
    List<Dish> dishes;

    @OneToMany(mappedBy = "ingredient")
    private List<DishModify> dishModifyList;
}

package com.SpringApi.SpringApi.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Ingredient")
@Data
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_ingredient")
    private Integer id_ingredient;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "ingredient")
    List<Dish_Ingredient> dish_ingredientList;

}

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

    @Column(name = "ingredient_name")
    private String ingredient_name;

    @OneToMany(mappedBy = "ingredient")
    List<Dish_Ingredient> dish_ingredientList;

}

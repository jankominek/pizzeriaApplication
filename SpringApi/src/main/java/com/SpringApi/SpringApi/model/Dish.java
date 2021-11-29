package com.SpringApi.SpringApi.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "dish")
@Data
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_dish")
    private Integer id_dish;

    @Column(name = "dish_name")
    private String dish_name;

    @OneToMany(mappedBy = "dish")
    List<Dish_Ingredient> dish_ingredientList;

}

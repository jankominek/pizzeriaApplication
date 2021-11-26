package com.SpringApi.SpringApi.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "dish_ingredient")
@Data
public class Dish_Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_d_i;

    @ManyToOne
    @JoinColumn(name = "id_dish")
    Dish dish;

    @ManyToOne
    @JoinColumn(name = "id_ingredient")
    Ingredient ingredient;

}

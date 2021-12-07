package com.SpringApi.SpringApi.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "dish_modify")
@Data
public class Dish_modify {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_dish_mod;

    @Column(name = "ingredient_count")
    private Integer ingredient_count;

    @ManyToOne
    @JoinColumn(name = "id_dish_order")
    private Dish_order dishOrder;

    @ManyToOne
    @JoinColumn(name = "id_ingredient")
    private Ingredient ingredient;

}

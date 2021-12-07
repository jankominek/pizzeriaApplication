package com.SpringApi.SpringApi.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "dish_order")
@Data
public class Dish_order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_dish_order;

    @Column(name = "isMod")
    private Boolean isMod;

    @Column(name = "count")
    private Integer count;

    @ManyToOne
    @JoinColumn(name = "idOrder", nullable = false)
    private UserOrder userOrder;

    @ManyToOne
    @JoinColumn(name = "id_dish", nullable = false)
    private Dish idDish;

    @OneToMany(mappedBy = "dishOrder")
    private List<Dish_modify> dishModifyList;
}

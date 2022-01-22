package com.SpringApi.SpringApi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "dishModify")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DishModify {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dishModId")
    private Integer dishModId;

    @Column(name = "ingredientCount")
    private Integer ingredientCount;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "dishOrderId")
    private DishOrder dishOrder;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "ingredientId")
    private Ingredient ingredient;

}

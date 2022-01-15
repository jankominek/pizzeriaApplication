package com.SpringApi.SpringApi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "dish")
@Data
public class Dish {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dishId")
    private Integer dishId;

    @Column(name = "dishName")
    private String dishName;

    @Column(name = "dish_price")
    private Double dishPrice;

    @OneToMany(mappedBy = "dishId")
    private List<DishOrder> dishOrderList;

    @JsonManagedReference
    @ManyToMany(cascade = CascadeType.MERGE)
            @JoinTable(name = "dish_ingredient",
            joinColumns = @JoinColumn(name = "dishId"),
                    inverseJoinColumns = @JoinColumn(name = "ingredientId"))
    List<Ingredient> ingredients;


}

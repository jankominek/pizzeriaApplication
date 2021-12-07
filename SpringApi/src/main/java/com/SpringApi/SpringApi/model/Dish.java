package com.SpringApi.SpringApi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

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
    @Column(name = "id_dish")
    private Integer id_dish;

    @Column(name = "dish_name")
    private String dish_name;

    @OneToMany(mappedBy = "idDish")
    private List<Dish_order> dishOrderList;

    @JsonManagedReference
    @ManyToMany(cascade = CascadeType.MERGE)
            @JoinTable(name = "dish_ingredient",
            joinColumns = @JoinColumn(name = "id_dish"),
                    inverseJoinColumns = @JoinColumn(name = "id_ingredient"))
    List<Ingredient> ingredients;


}

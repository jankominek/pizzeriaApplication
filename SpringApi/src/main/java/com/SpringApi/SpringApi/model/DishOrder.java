package com.SpringApi.SpringApi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;



@Builder
@Table(name = "dishOrder")
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class DishOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer dishOrderId;

    @Column(name = "isMod")
    private Boolean isMod;

    @Column(name = "count")
    private Integer count;

    @Column(name = "dish_price")
    private Double dishPrice;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "orderId", nullable = false)
    private UserOrder userOrder;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "dishId", nullable = false)
    private Dish dishId;

    @JsonManagedReference
    @OneToMany(mappedBy = "dishOrder")
    private List<DishModify> dishModifyList;

}

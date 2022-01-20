package com.SpringApi.SpringApi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;



@Builder
@Table(name = "dishOrder")
@Data
@Entity
public class DishOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer dishOrderId;

    @Column(name = "isMod")
    private Boolean isMod;

    @Column(name = "count")
    private Integer count;

    @Column(name = "dish_price")
    private Float dishPrice;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "orderId", nullable = false)
    private UserOrder userOrder;

    @ManyToOne
    @JoinColumn(name = "dishId", nullable = false)
    private Dish dishId;

    @OneToMany(mappedBy = "dishOrder")
    private List<DishModify> dishModifyList;

}

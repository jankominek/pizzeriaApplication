package com.SpringApi.SpringApi.controller;


import com.SpringApi.SpringApi.service.Dish_orderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/dish/order")
public class Dish_orderController {

    @Autowired
    Dish_orderService dishOrderService;

    @PostMapping("/new")
    public void addDishToOrder(){
        dishOrderService.createOrder();
    }
}

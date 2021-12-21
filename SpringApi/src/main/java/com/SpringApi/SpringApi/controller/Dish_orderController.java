package com.SpringApi.SpringApi.controller;


import com.SpringApi.SpringApi.service.Dish_orderService;
import com.SpringApi.SpringApi.utils.Dish_orderPostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/dish/order")
@CrossOrigin(origins = "http://localhost:3000")
public class Dish_orderController {

    @Autowired
    Dish_orderService dishOrderService;

    @PostMapping("/new/{email}")
    public void addDishToOrder(@PathVariable String email, @RequestBody List<Dish_orderPostModel> dishes){
        dishOrderService.addDishesToOrder(email, dishes);
    }
}

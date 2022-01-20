package com.SpringApi.SpringApi.controller;


import com.SpringApi.SpringApi.model.UserOrder;
import com.SpringApi.SpringApi.service.UserOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class UserOrderController {

    @Autowired
    UserOrderService userOrderService;

    @PostMapping("/new")
    public void addNewOrder(){

    }

    @GetMapping("/allOdersByStatus/{status}")
    public List<UserOrder> getAllOrdersByStatusWithUserInfo(@PathVariable Integer status){
         return userOrderService.getAllOrdersByStatusWithUserInfo(status);
    }
}

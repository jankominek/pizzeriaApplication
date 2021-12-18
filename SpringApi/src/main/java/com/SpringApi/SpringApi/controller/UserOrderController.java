package com.SpringApi.SpringApi.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class UserOrderController {

    @PostMapping("/new")
    public void addNewOrder(){

    }
}

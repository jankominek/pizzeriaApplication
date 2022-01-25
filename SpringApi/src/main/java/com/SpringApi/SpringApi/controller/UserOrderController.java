package com.SpringApi.SpringApi.controller;


import com.SpringApi.SpringApi.model.UserOrder;
import com.SpringApi.SpringApi.model.UserWithOrdersAndDishesDTO;
import com.SpringApi.SpringApi.service.UserOrderService;
import com.SpringApi.SpringApi.utils.EmployeeToOrder;
import com.SpringApi.SpringApi.utils.UserStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:3000")
public class UserOrderController {

    @Autowired
    UserOrderService userOrderService;

    @PostMapping("/new")
    public void addNewOrder(){

    }

    @GetMapping("/allOdersByStatus/{status}")
    public List<UserWithOrdersAndDishesDTO> getAllOrdersByStatusWithUserInfo(@PathVariable Integer status){
         return userOrderService.getAllOrdersByStatusWithUserInfo(status);
    }

    @PostMapping("/changeStatus/{orderId}")
    public Boolean changeOrderStatus(@PathVariable Integer orderId){
        return userOrderService.changeOrderStatus(orderId);
    }

    @PostMapping("/addToOrder/{empId}/{orderId}")
    public void addEmployeeToOrder(@PathVariable Integer empId, @PathVariable Integer orderId){
        userOrderService.addEmployeeToOrder(empId, orderId);
    }
}

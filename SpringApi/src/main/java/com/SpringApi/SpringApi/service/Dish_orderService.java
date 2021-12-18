package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.User;
import com.SpringApi.SpringApi.model.UserOrder;
import com.SpringApi.SpringApi.repository.Dish_orderRepository;
import com.SpringApi.SpringApi.repository.UserOrderRepository;
import com.SpringApi.SpringApi.repository.UserRepository;
import java.sql.Time;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

@Service
public class Dish_orderService {

    @Autowired
    UserOrderRepository userOrderRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    Dish_orderRepository dishOrderRepository;

    public User getUser(){
        return userRepository.findByFirstname("test");
    }
    public void createOrder(){
        Timestamp date = new Timestamp(System.currentTimeMillis());
        User user = getUser();
        UserOrder userOrder = UserOrder.builder().date(date).status(false).userId(user).build();
        userOrderRepository.save(userOrder);
    }


}

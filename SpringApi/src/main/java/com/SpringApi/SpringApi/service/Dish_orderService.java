package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.Dish;
import com.SpringApi.SpringApi.model.Dish_order;
import com.SpringApi.SpringApi.model.User;
import com.SpringApi.SpringApi.model.UserOrder;
import com.SpringApi.SpringApi.repository.DishRepository;
import com.SpringApi.SpringApi.repository.Dish_orderRepository;
import com.SpringApi.SpringApi.repository.UserOrderRepository;
import com.SpringApi.SpringApi.repository.UserRepository;

import com.SpringApi.SpringApi.utils.Dish_orderPostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Stream;

@Service
public class Dish_orderService {

    @Autowired
    UserOrderRepository userOrderRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    Dish_orderRepository dishOrderRepository;
    @Autowired
    DishRepository dishRepository;

    public User getUser(String email){
        return userRepository.findByFirstname(email);
    }

    public UserOrder createOrder(String email){
        Timestamp date = new Timestamp(System.currentTimeMillis());
        User user = getUser("test");
        UserOrder userOrder = UserOrder.builder().date(date).status(false).userId(user).build();
        userOrderRepository.save(userOrder);

        return userOrder;
    }

    public void addDishesToOrder(String email, List<Dish_orderPostModel> dishes){

        UserOrder userOrder = createOrder(email);

        dishes.stream().forEach( dishModel -> {
            Dish dish = dishRepository.findByDishName(dishModel.getDish_name());
            Dish_order builtDish = Dish_order.builder().count(1).isMod(false).idDish(dish).userOrder(userOrder).build();
            dishOrderRepository.save(builtDish);
        });

    }


}

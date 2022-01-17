package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.*;
import com.SpringApi.SpringApi.repository.*;

import com.SpringApi.SpringApi.utils.DishOrderFullObject;
import com.SpringApi.SpringApi.utils.Dish_orderPostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

@Service
public class DishOrderService {

    @Autowired
    UserOrderRepository userOrderRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    DishOrderRepository dishOrderRepository;
    @Autowired
    DishRepository dishRepository;
    @Autowired
    DishModifyRepository dishModifyRepository;
    @Autowired
    IngredientRepository ingredientRepository;
    @Autowired
    PaymentRepository paymentRepository;

    public User getUser(String email){
        return userRepository.findUserByEmail(email);
    }

    @Transactional
    public UserOrder createOrder(String email, String address, String payment, String phone){
        Timestamp date = new Timestamp(System.currentTimeMillis());
        User user = getUser(email);
        Payment paymentInstance = paymentRepository.findByType(payment);
        UserOrder userOrder = UserOrder.builder()
                .date(date)
                .price_date(date)
                .phoneNumber(phone)
                .adressOrder(address)
                .payment(paymentInstance)
                .status(-1)
                .userId(user).build();
        userOrderRepository.save(userOrder);

        Integer result = dishOrderRepository.myFunc(69);
        System.out.println(result);
        return userOrder;
    }


    public void addDishesToOrder(String email, DishOrderFullObject dishObject){

        UserOrder userOrder = createOrder(email, dishObject.getAddress(), dishObject.getPayment(), dishObject.getPhone());
        dishObject.getDishes().stream().forEach( dishModel -> {
            Dish dish = dishRepository.findDishByDishName(dishModel.getDish_name());
            DishOrder builtDish = DishOrder.builder()
                    .count(1)
                    .isMod(dishModel.getIsMod())
                    .dishId(dish)
                    .userOrder(userOrder)
                    .build();
            dishOrderRepository.save(builtDish);

            if(dishModel.getIsMod().equals(true)){
                dishModel.getIngredients().stream().forEach(ingredient -> {
                    Ingredient ingredientObject = ingredientRepository.findIngredientByIngredientName(ingredient);
                    DishModify modifiedDish = DishModify.builder().ingredientCount(1).dishOrder(builtDish).ingredient(ingredientObject).build();
                    dishModifyRepository.save(modifiedDish);
                });

            }
        });



    }


}

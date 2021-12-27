package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.*;
import com.SpringApi.SpringApi.repository.*;

import com.SpringApi.SpringApi.utils.Dish_orderPostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public User getUser(String email){
        return userRepository.findUserByEmail(email);
    }

    public UserOrder createOrder(String email){
        Timestamp date = new Timestamp(System.currentTimeMillis());
        User user = getUser(email);
        UserOrder userOrder = UserOrder.builder().date(date).status(false).userId(user).build();
        userOrderRepository.save(userOrder);

        return userOrder;
    }

    public void addDishesToOrder(String email, List<Dish_orderPostModel> dishes){

        UserOrder userOrder = createOrder(email);

        dishes.stream().forEach( dishModel -> {
            Dish dish = dishRepository.findDishByDishName(dishModel.getDish_name());
            DishOrder builtDish = DishOrder.builder().count(1).isMod(dishModel.getIsMod()).dishId(dish).userOrder(userOrder).build();
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

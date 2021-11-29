package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.Dish;
import com.SpringApi.SpringApi.model.Dish_Ingredient;
import com.SpringApi.SpringApi.repository.DishRepository;
import com.SpringApi.SpringApi.utils.Dish_IngredientModelQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
public class DishService {

    @Autowired
    DishRepository dishRepository;

    public List<Dish_Ingredient> findAllDishesId(){
        return dishRepository.findAll();
    }
}

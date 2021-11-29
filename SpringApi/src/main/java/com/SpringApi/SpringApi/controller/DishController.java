package com.SpringApi.SpringApi.controller;

import com.SpringApi.SpringApi.model.Dish;
import com.SpringApi.SpringApi.model.Dish_Ingredient;
import com.SpringApi.SpringApi.service.DishService;
import com.SpringApi.SpringApi.utils.Dish_IngredientModelQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Iterator;
import java.util.List;

@RestController
@RequestMapping("/dish")
public class DishController {

    @Autowired
    DishService dishService;

    @GetMapping("/withIngredients/all")
    public List<Dish_Ingredient> getAllDishesWithIngredients(){
        return dishService.findAllDishesId();
    }


}

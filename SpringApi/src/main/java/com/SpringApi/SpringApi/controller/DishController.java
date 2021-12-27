package com.SpringApi.SpringApi.controller;

import com.SpringApi.SpringApi.dto.Dish_ingredientDTO;
import com.SpringApi.SpringApi.model.Dish;
import com.SpringApi.SpringApi.service.DishService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dish")
@CrossOrigin(origins = "http://localhost:3000")
public class DishController {

    @Autowired
    DishService dishService;

    @GetMapping("/withIngredients/all")
    @JsonIgnore()
    public List<Dish_ingredientDTO> getAllDishesWithIngredients(){
        return dishService.findAllDishesId();
    }

    @GetMapping("/{id}")
    public Dish_ingredientDTO getDishById(@PathVariable Integer id){
        return dishService.getDishById(id);
    }

}

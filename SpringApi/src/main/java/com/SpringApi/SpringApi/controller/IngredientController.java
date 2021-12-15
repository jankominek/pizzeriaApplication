package com.SpringApi.SpringApi.controller;

import com.SpringApi.SpringApi.dto.IngredientDto;
import com.SpringApi.SpringApi.model.Ingredient;
import com.SpringApi.SpringApi.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ingredient")
@CrossOrigin(origins = "http://localhost:3000")
public class IngredientController {

    @Autowired
    IngredientService ingredientService;

    @GetMapping("/all")
    public List<IngredientDto> getAllIngredients(){
        return ingredientService.getAllIngredients();
    }
}

package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.dto.IngredientDto;
import com.SpringApi.SpringApi.model.Ingredient;
import com.SpringApi.SpringApi.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

    @Autowired
    IngredientRepository ingredientRepository;

    public List<IngredientDto> getAllIngredients(){
        List<Ingredient> ingredientList = (List<Ingredient>) ingredientRepository.findAll();
        List<IngredientDto> ingredientDtos = ingredientToDto(ingredientList);
        return ingredientDtos;
    }

    public List<IngredientDto> ingredientToDto(List<Ingredient> ingredients){
        List<IngredientDto> ingredientDtoList = ingredients.stream().map( ingredient -> IngredientDto.builder()
                .ingredient_name(ingredient.getIngredientName()).
                ingredient_id(ingredient.getIngredientId()).build()).toList();
        return ingredientDtoList;
    }
}

package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.dto.Dish_ingredientDTO;
import com.SpringApi.SpringApi.model.Dish;
import com.SpringApi.SpringApi.model.Ingredient;
import com.SpringApi.SpringApi.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DishService {

    @Autowired
    DishRepository dishRepository;

    public List<Dish_ingredientDTO> findAllDishesId() {
        List<Dish> dishes = dishRepository.findAll();
        List<Dish_ingredientDTO> dish_ingredientDTOS = buildDishesToDto(dishes);
        return dish_ingredientDTOS;
    }

    public Dish_ingredientDTO getDishById(Integer id) {

        Optional<Dish> dish = dishRepository.findById(id);
        Dish_ingredientDTO dishDto = buildDishesToDto(Arrays.asList(dish.get())).get(0);
        return dishDto;
    }

    public List<Dish_ingredientDTO> buildDishesToDto(List<Dish> dishes) {
        List<Dish_ingredientDTO> dish_ingredientDTOS = dishes.stream().map(dish -> {
           List<String> ingredients = dish.getIngredients().stream().map( ingredient -> ingredient.getIngredient_name()).toList();
            Dish_ingredientDTO dto = Dish_ingredientDTO.builder()
                    .dishName(dish.getDish_name())
                    .ingredients(ingredients)
                    .dish_id(dish.getId_dish())
                    .build();
            return dto;
        }).toList();
        return dish_ingredientDTOS;
    }


}

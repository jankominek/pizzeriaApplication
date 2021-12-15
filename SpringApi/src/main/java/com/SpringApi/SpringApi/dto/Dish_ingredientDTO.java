package com.SpringApi.SpringApi.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;


@Data
@Builder
public class Dish_ingredientDTO {

    private String dishName;
    private List<String> ingredients;

}

package com.SpringApi.SpringApi.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;


@Data
@Builder
public class Dish_ingredientDTO {

    private Integer dish_id;
    private String dishName;
    private Double dishPrice;
    private List<String> ingredients;

}

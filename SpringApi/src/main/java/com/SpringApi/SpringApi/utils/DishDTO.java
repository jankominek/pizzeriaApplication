package com.SpringApi.SpringApi.utils;

import com.SpringApi.SpringApi.model.Ingredient;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class DishDTO {
    private String dishName;
    private List<Ingredient> ingredients;
}
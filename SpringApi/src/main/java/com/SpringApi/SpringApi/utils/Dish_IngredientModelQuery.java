package com.SpringApi.SpringApi.utils;


import lombok.Getter;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.ModelAttribute;

import javax.persistence.Entity;

@Getter
public class Dish_IngredientModelQuery {
    private Integer id_d_i;
    private String dish_name;
    private String ingredient_name;
}

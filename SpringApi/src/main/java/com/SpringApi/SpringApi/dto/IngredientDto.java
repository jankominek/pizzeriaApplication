package com.SpringApi.SpringApi.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class IngredientDto {
    private String ingredient_name;
    private Integer ingredient_id;
}

package com.SpringApi.SpringApi.utils;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class OrderEmailObject {
    private List<DishesEmail> dishes;
    private Double generalPrice;
}
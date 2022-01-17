package com.SpringApi.SpringApi.utils;

import lombok.Data;

import java.util.List;

@Data
public class DishOrderFullObject {
    private String address;
    private String phone;
    private String payment;
    private List<Dish_orderPostModel> dishes;
}

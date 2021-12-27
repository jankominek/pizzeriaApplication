package com.SpringApi.SpringApi.utils;


import lombok.Data;

import java.util.List;

@Data
public class Dish_orderPostModel {
        private String dish_name;
        private List<String> ingredients;
        private Boolean isMod;
}

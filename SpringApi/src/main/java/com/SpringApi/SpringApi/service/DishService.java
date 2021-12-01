package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.Dish;
import com.SpringApi.SpringApi.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishService {

    @Autowired
    DishRepository dishRepository;

    public List<Dish> findAllDishesId(){
        return dishRepository.findAll();
    }
}

package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.DishModify;
import com.SpringApi.SpringApi.model.DishOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DishModifyRepository extends JpaRepository<DishModify, Integer> {

//    List<Dish_modify> saveAll();
    DishModify findDishModifyByDishOrder(DishOrder dishOrder);
}

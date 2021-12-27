package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.DishModify;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DishModifyRepository extends JpaRepository<DishModify, Integer> {

//    List<Dish_modify> saveAll();
}

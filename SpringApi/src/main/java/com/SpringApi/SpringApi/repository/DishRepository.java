package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer> {


    @Query("select d from Dish d where d.dishName = ?1")
    Dish findDishByDishName(String name);

    Dish findDishByDishId(Integer dishId);
//    Dish findByDishName(String name);
}

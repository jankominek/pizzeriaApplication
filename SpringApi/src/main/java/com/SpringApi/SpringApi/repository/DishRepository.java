package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer> {

//    @Query(value = "SELECT Dish_Ingredient.id_d_i, Dish.name, Ingredient.name FROM Dish_Ingredient,Dish,Ingredient WHERE " +
//            "Dish_Ingredient.dish.id_dish = Dish.id_dish AND Dish_Ingredient.ingredient.id_ingredient = Ingredient.id_ingredient", nativeQuery = true)
//    @Query(value = "select dish_ingredient.id_d_i, dish.dish_name, ingredient.ingredient_name from dish_ingredient, dish, ingredient where dish_ingredient.id_dish = dish.id_dish and dish_ingredient.id_ingredient = ingredient.id_ingredient", nativeQuery = true)
//@Query(value = "SELECT id_d_i from dish_ingredient", nativeQuery = true)
//    List<Dish> findAll();
}

package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {

    Ingredient findIngredientByIngredientName(String name);
}

package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Ingredient;
import org.springframework.data.repository.CrudRepository;

public interface IngredientRepository extends CrudRepository<Ingredient, Integer> {

}

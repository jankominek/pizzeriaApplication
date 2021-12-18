package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Dish_order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Dish_orderRepository extends CrudRepository<Dish_order, Integer> {



}

package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.DishOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishOrderRepository extends JpaRepository<DishOrder, Integer> {

}

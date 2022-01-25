package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.DishOrder;
import com.SpringApi.SpringApi.model.UserOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository

public interface DishOrderRepository extends JpaRepository<DishOrder, Integer> {

//    @Modifying
    @Transactional
    @Query(value = "select calculateOrderPrice(?1) as calculateOrderPrice", nativeQuery = true)
    Integer myFunc(Integer myint);

    List<DishOrder> findAllByUserOrder(UserOrder userOrder);

    @Modifying
    @Transactional
    @Query(value = "update DishOrder d set d.dishPrice = :price where d.dishOrderId = :id")
    void modifyDishPrice(@Param(value = "price") Double price, @Param(value = "id") Integer id);

//    @Procedure("myFunc")
//    Integer myFunc();

}

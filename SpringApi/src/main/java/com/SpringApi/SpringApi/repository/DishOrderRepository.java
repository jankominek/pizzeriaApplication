package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.DishOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository

public interface DishOrderRepository extends JpaRepository<DishOrder, Integer> {

//    @Modifying
    @Transactional
    @Query(value = "select myFunctionTest() as myFunctionTest", nativeQuery = true)
    Integer myFunc();

//    @Procedure("myFunc")
//    Integer myFunc();

}

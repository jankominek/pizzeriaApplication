package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Employee;
import com.SpringApi.SpringApi.model.User;
import com.SpringApi.SpringApi.model.UserOrder;
import com.SpringApi.SpringApi.utils.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserOrderRepository extends JpaRepository<UserOrder, Integer> {
    List<UserOrder> findAllByStatus(Integer status);

    UserOrder findUserOrderByOrderId(Integer orderId);

    @Transactional
    @Modifying
    @Query("update UserOrder u set u.status = :userStatus where u.orderId = :orderId")
    void changeUserStatus(@Param(value ="userStatus") Integer userStatus, @Param(value = "orderId") Integer orderId);

    @Transactional
    @Modifying
    @Query("update UserOrder u set u.employeeId = :emp where u.orderId = :orderId")
    void addEmployeeToOrder(@Param(value ="emp") Employee emp, @Param(value = "orderId") Integer orderId);

    Optional<List<UserOrder>> findAllByEmployeeId(Employee employee);
    // FUNKCJA
    @Transactional
    @Query(value = "select getFullDishPrice(?1) as getFullDishPrice", nativeQuery = true)
    Double getFullDishPrice(Integer orderId);

    @Transactional
    @Modifying
    @Query("update UserOrder u set u.price = :orderPrice where u.orderId = :orderId")
    void setOrderPrice(@Param(value ="orderPrice") Double orderPrice, @Param(value = "orderId") Integer orderId);

    Optional<List<UserOrder>> findUserOrderByUserId(User user);
}

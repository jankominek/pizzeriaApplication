package com.SpringApi.SpringApi.repository;

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

@Repository
public interface UserOrderRepository extends JpaRepository<UserOrder, Integer> {
    List<UserOrder> findAllByStatus(Integer status);

    UserOrder findUserOrderByOrderId(Integer orderId);

    @Transactional
    @Modifying
    @Query("update UserOrder u set u.status = :userStatus where u.orderId = :orderId")
    void changeUserStatus(@Param(value ="userStatus") Integer userStatus, @Param(value = "orderId") Integer orderId);
}

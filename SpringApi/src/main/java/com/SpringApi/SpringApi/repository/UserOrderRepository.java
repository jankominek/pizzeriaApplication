package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.UserOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface UserOrderRepository extends CrudRepository<UserOrder, BigInteger> {

}

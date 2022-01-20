package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.UserOrder;
import com.SpringApi.SpringApi.repository.UserOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserOrderService {

    @Autowired
    UserOrderRepository userOrderRepository;

    public List<UserOrder> getAllOrdersByStatusWithUserInfo(Integer status) {
        List<UserOrder> userOrder = userOrderRepository.findAllByStatus(status);
        return userOrder;
    }
}

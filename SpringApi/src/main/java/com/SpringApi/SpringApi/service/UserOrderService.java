package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.*;
import com.SpringApi.SpringApi.repository.DishOrderRepository;
import com.SpringApi.SpringApi.repository.DishRepository;
import com.SpringApi.SpringApi.repository.UserOrderRepository;
import com.SpringApi.SpringApi.utils.DishDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserOrderService {

    @Autowired
    UserOrderRepository userOrderRepository;
    @Autowired
    DishOrderRepository dishOrderRepository;
    @Autowired
    DishRepository dishRepository;

    public List<UserOrder> getAllOrdersByStatusWithUserInfo(Integer status) {
        List<UserOrder> userOrderList = userOrderRepository.findAllByStatus(status);


        List<UserWithOrdersAndDishesDTO> userOrderDto = userOrderList.stream().map( userOrder -> {
            User user = userOrder.getUserId();

            List<DishOrder> dishOrderList = dishOrderRepository.findAllByUserOrder(userOrder);
            List<DishDTO> dishDTOList = dishOrderList.stream().map( dishDto -> {

                Dish dish = dishRepository.findDishByDishId(dishDto.getDishId().getDishId());
                    return DishDTO.builder()
                            .dishName(dish.getDishName())
                            .ingredients(dish.getIngredients())
                            .build();
            }).collect(Collectors.toList());


            return UserWithOrdersAndDishesDTO.builder()
                    .idOrder(userOrder.getOrderId())
                    .address(userOrder.getAdressOrder())
                    .firstName(user.getFirstname())
                    .lastName(user.getLastName())
                    .email(user.getEmail())
                    .phone(userOrder.getPhoneNumber())
                    .payment(userOrder.getPayment().getType())
                    .price(userOrder.getPrice()).build();
        }).collect(Collectors.toList());

        return userOrderList;
    }


}

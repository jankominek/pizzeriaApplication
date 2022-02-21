package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.*;
import com.SpringApi.SpringApi.repository.*;
import com.SpringApi.SpringApi.utils.DishDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserOrderService {

    @Autowired
    UserOrderRepository userOrderRepository;
    @Autowired
    DishOrderRepository dishOrderRepository;
    @Autowired
    DishRepository dishRepository;
    @Autowired
    DishModifyRepository dishModifyRepository;
    @Autowired
    IngredientRepository ingredientRepository;
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    UserRepository userRepository;

    public List<UserWithOrdersAndDishesDTO> getAllOrdersByStatusWithUserInfo(Integer status) {
        List<UserOrder> userOrderList = userOrderRepository.findAllByStatus(status);


        List<UserWithOrdersAndDishesDTO> userOrderDto = userOrderList.stream().map( userOrder -> {
            User user = userOrder.getUserId();

            List<DishOrder> dishOrderList = dishOrderRepository.findAllByUserOrder(userOrder);

            List<DishDTO> dishDTOList = dishOrderList.stream().map( dishDto -> {

                if ( !dishDto.getIsMod()) {
                    Dish dish = dishRepository.findDishByDishId(dishDto.getDishId().getDishId());
                    return DishDTO.builder()
                            .dishName(dish.getDishName())
                            .ingredients(dish.getIngredients())
                            .build();
                }
                List<DishModify> dishModify = dishDto.getDishModifyList();

                List<Ingredient> dishModifyIngredients = dishModify.stream().map( dishModifyObject -> {
                        Ingredient ingredientObject = ingredientRepository.findIngredientByIngredientName(dishModifyObject.getIngredient().getIngredientName());
                        return ingredientObject;
                }).collect(Collectors.toList());


                return DishDTO.builder()
                        .dishName(dishDto.getDishId().getDishName())
                        .ingredients(dishModifyIngredients)
                        .build();
            }).collect(Collectors.toList());
            return UserWithOrdersAndDishesDTO.builder()
                    .idOrder(userOrder.getOrderId())
                    .address(userOrder.getAdressOrder())
                    .firstName(user.getFirstname())
                    .lastName(user.getLastName())
                    .email(user.getEmail())
                    .phone(userOrder.getPhoneNumber())
                    .employeeId(userOrder.getEmployeeId().getEmployeeId())
                    .voivodeship(userOrder.getUserId().getVoivodeship().getVoivodeshipName())
                    .city(userOrder.getUserId().getCity().getCityName())
                    .payment(userOrder.getPayment().getType())
                    .price(userOrder.getPrice())
                    .dishes(dishDTOList)
                    .build();
        }).collect(Collectors.toList());

        return userOrderDto;
    }


    public Boolean changeOrderStatus(Integer orderId) {
        UserOrder userOrder = userOrderRepository.findUserOrderByOrderId(orderId);
        Integer currentUserOrderStatus = userOrder.getStatus();
        if(currentUserOrderStatus < 1) {
            Integer newStatus = currentUserOrderStatus + 1;
            userOrderRepository.changeUserStatus(newStatus, orderId);
            return true;
        }
        return false;
    }

    public void addEmployeeToOrder(Integer employeeId, Integer orderId){
        Employee employee = employeeRepository.getById(employeeId);
        userOrderRepository.addEmployeeToOrder(employee, orderId);
    }

    public void getSummaryOrder(String email) {
        User user = userRepository.findUserByEmail(email).get();
        Optional<List<UserOrder>> userOrders = userOrderRepository.findUserOrderByUserId(user);
        List<UserOrder> orders = userOrders.get().stream().sorted(Comparator.comparing(UserOrder::getOrderId)).collect(Collectors.toList());
        System.out.println(orders.get(orders.size() - 1).getOrderId());
    }
}

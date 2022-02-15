package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.*;
import com.SpringApi.SpringApi.repository.*;

import com.SpringApi.SpringApi.utils.DishOrderFullObject;
import com.SpringApi.SpringApi.utils.Dish_orderPostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class DishOrderService {

    @Autowired
    UserOrderRepository userOrderRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    DishOrderRepository dishOrderRepository;
    @Autowired
    DishRepository dishRepository;
    @Autowired
    DishModifyRepository dishModifyRepository;
    @Autowired
    IngredientRepository ingredientRepository;
    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    EmployeeRepository employeeRepository;

    public Optional<User> getUser(String email){
        return userRepository.findUserByEmail(email);
    }

    public Employee getEmployeeToOrder(){
        List<Employee> employeeList =employeeRepository.findAll();
        Random random = new Random();
        Integer stop = 0;
        Integer selectedValue = null;
//        while(stop.equals(0)){
//            Integer randomNumber = random.nextInt(employeeList.size());
//            if(!randomNumber.equals(0)) {
//                selectedValue = randomNumber;
//                stop = 1;
//
//            }
//        }
        Integer randomNumber = random.nextInt(employeeList.size()) + 1;
        System.out.println("selected value: " + selectedValue);
        Employee selectedEmployee = employeeList.get(selectedValue - 1);

        return selectedEmployee;

    }

    @Transactional
    public UserOrder createOrder(String email, String address, String payment, String phone){
        Timestamp date = new Timestamp(System.currentTimeMillis());
        User user = getUser(email).get();
        Payment paymentInstance = paymentRepository.findByType(payment);
        Employee admin = employeeRepository.getById(1);
        UserOrder userOrder = UserOrder.builder()
                .date(date)
                .price_date(date)
                .phoneNumber(phone)
                .adressOrder(address)
                .payment(paymentInstance)
                .employeeId(admin)
                .status(-1)
                .userId(user)
                .build();
        userOrderRepository.save(userOrder);

//        Integer result = dishOrderRepository.myFunc(69);
//        System.out.println(result);
        return userOrder;
    }


    public void addDishesToOrder(String email, DishOrderFullObject dishObject){

        UserOrder userOrder = createOrder(email, dishObject.getAddress(), dishObject.getPayment(), dishObject.getPhone());
        dishObject.getDishes().stream().forEach( dishModel -> {
            Dish dish = dishRepository.findDishByDishName(dishModel.getDish_name());
            DishOrder builtDish = DishOrder.builder()
                    .count(1)
                    .isMod(dishModel.getIsMod())
                    .dishId(dish)
                    .dishPrice(dish.getDishPrice())
                    .userOrder(userOrder)
                    .build();
            dishOrderRepository.save(builtDish);
            if(dishModel.getIsMod().equals(true)){

                dishModel.getIngredients().stream().forEach(ingredient -> {
                    Ingredient ingredientObject = ingredientRepository.findIngredientByIngredientName(ingredient);

                    DishModify modifiedDish = DishModify.builder()
                            .ingredientCount(1)
                            .dishOrder(builtDish)
                            .ingredient(ingredientObject)
                            .build();
                    dishModifyRepository.save(modifiedDish);
                });
//                List<Ingredient> listWithOnlyAdditionalIngredients = ingredientsList.stream().filter( ingredient -> {
//                    for( Ingredient dishIng : dish.getIngredients()){
//                        if(dishIng.getIngredientName().equals(ingredient.getIngredientName())) return false;
//                    }
//                    return true;
//                }).collect(Collectors.toList());
//                List<Ingredient> listWithOnlyAdditionalIngredients =
                System.out.println("==========================================");
                // updating modified dishes price

                List<DishModify> dishModifyObject =  dishModifyRepository.findAllByDishOrder(builtDish);
                List<Ingredient> ingredientsFromModify = dishModifyObject.stream().map( obj -> obj.getIngredient()).collect(Collectors.toList());
                System.out.println(" before : " + ingredientsFromModify.size());
                List<Ingredient> originalIngredients = dish.getIngredients();
                ingredientsFromModify.removeAll(originalIngredients);
                System.out.println("after : " + ingredientsFromModify.size());
                Double priceFromModified = ingredientsFromModify.stream().mapToDouble(d -> d.getIngredientPrice()).sum();
                System.out.println("price " + priceFromModified);
                Double price = dish.getDishPrice() + priceFromModified;

                dishOrderRepository.modifyDishPrice(price, builtDish.getDishOrderId());


//                for(Ingredient a : listWithOnlyAdditionalIngredients){
//                    System.out.println(a.getIngredientName());
//                }
            }

        });

        Double fullOrderPrice = userOrderRepository.getFullDishPrice(userOrder.getOrderId());
        System.out.println(fullOrderPrice);
        userOrderRepository.setOrderPrice(fullOrderPrice, userOrder.getOrderId());

    }

}

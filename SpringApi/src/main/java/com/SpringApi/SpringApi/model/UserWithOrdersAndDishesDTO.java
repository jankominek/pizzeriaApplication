package com.SpringApi.SpringApi.model;

import com.SpringApi.SpringApi.utils.DishDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserWithOrdersAndDishesDTO {

    private Integer idOrder;
    private String address;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String city;
    private String voivodeship;
    private String payment;
    private Integer employeeId;
    private Double price;

    private List<DishDTO> dishes;


}


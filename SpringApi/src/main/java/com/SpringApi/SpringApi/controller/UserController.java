package com.SpringApi.SpringApi.controller;

import com.SpringApi.SpringApi.dto.UserCredentialsDto;
import com.SpringApi.SpringApi.dto.UserDto;
import com.SpringApi.SpringApi.dto.UserInfoDto;
import com.SpringApi.SpringApi.model.User;
import com.SpringApi.SpringApi.service.UserService;
import com.SpringApi.SpringApi.utils.EditUserDTO;
import com.SpringApi.SpringApi.utils.UserVerification;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/pizza")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/getUser")
    public User getUser(@RequestBody String email){
        return userService.getUser(email).get();
    }

    @GetMapping("/user/{email}/information")
    public UserCredentialsDto getUserInformation(@PathVariable String email){
        return userService.getUserCredentialsDto(email);
    }

    @GetMapping("/users/checkBy/{id}/{password}")
    public Boolean checkUserPasswordById(@PathVariable Integer id, @PathVariable String password){
        return userService.checkUserByPassword(id, password);
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody UserCredentialsDto user){ userService.registerUser(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody UserCredentialsDto user) {
        return userService.loginUser(user);
    }
    @PostMapping("/verification")
    public Boolean verifyAccount(@RequestBody UserVerification userVerification){
        return userService.verifyAccount(userVerification);
    }
    @GetMapping("/getUserInfo/{email}")
    public UserInfoDto getUserInfo(@PathVariable String email){
        System.out.println(email);
        return userService.getUserInfo(email);
    }
    @PostMapping("/updateUser/{email}")
    public void updateUserCredentials(@PathVariable String email, @RequestBody EditUserDTO newUser){
        userService.updateUserCredentials(email, newUser);
    }

    @PostMapping("/addEmployee")
    public void addEmployee(){

    }

}

package com.SpringApi.SpringApi.controller;

import com.SpringApi.SpringApi.model.Employee;
import com.SpringApi.SpringApi.service.EmployeeService;
import com.SpringApi.SpringApi.utils.EmployeeDto;
import com.SpringApi.SpringApi.utils.NewEmployeeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/all")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @GetMapping("/checkBy/{id}/{password}")
    public Boolean checkUserPasswordById(@PathVariable Integer id, @PathVariable String password){
        return employeeService.checkUserByPassword(id, password);
    }

    @GetMapping("/getEmployeeInfo/{email}")
    public EmployeeDto getEmpInfo(@PathVariable String email){
        return employeeService.getEmpInfo(email);
    }

    @PostMapping("/save")
    public Employee saveEmployee(@RequestBody NewEmployeeDto employeeDto){
        return employeeService.saveEmployee(employeeDto);
    }
    @PostMapping("/delete/{id}")
    public Boolean deleteEmployee(@PathVariable Integer id){
        return employeeService.deleteEmployee(id);
    }
}

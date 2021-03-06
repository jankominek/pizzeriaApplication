package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.*;
import com.SpringApi.SpringApi.repository.CityRepository;
import com.SpringApi.SpringApi.repository.EmployeeRepository;
import com.SpringApi.SpringApi.repository.UserOrderRepository;
import com.SpringApi.SpringApi.repository.VoivodeshipRepository;
import com.SpringApi.SpringApi.utils.EmployeeDto;
import com.SpringApi.SpringApi.utils.NewEmployeeDto;
import com.SpringApi.SpringApi.utils.PersonType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    CityRepository cityRepository;
    @Autowired
    UserOrderRepository userOrderRepository;
    @Autowired
    VoivodeshipRepository voivodeshipRepository;

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Boolean checkUserByPassword(Integer id, String password){
        Employee employee = employeeRepository.findEmployeeByEmployeeId(id);
        if(password.equals(employee.getPassword())){
            return true;
        }
        return false;
    }

    public EmployeeDto getEmpInfo(String email) {
        Employee emp = employeeRepository.findEmployeeByEmail(email).get();
        return EmployeeDto.builder()
                .employeeId(emp.getEmployeeId())
                .email(emp.getEmail())
                .name(emp.getName())
                .lastName(emp.getLastName())
                .role(emp.getType().toString()).build();
    }

    public Employee saveEmployee(NewEmployeeDto employeeDto) {

        City city = cityRepository.findCityByCityId(employeeDto.getCity());
        Voivodeship voivodeship = voivodeshipRepository.findVoivodeshipByVoivodeshipId(employeeDto.getVoivodeship());

        Employee employee = Employee.builder()
                .name(employeeDto.getName())
                .lastName(employeeDto.getLastName())
                .email(employeeDto.getEmail())
                .password(employeeDto.getPassword())
                .city(city)
                .type(PersonType.ADMIN)
                .voivodeship(voivodeship).build();

        return employeeRepository.save(employee);
    }

    public Boolean deleteEmployee(Integer id) {
        Employee employee = employeeRepository.findEmployeeByEmployeeId(id);
        Employee admin = employeeRepository.findEmployeeByEmployeeId(1);
        if(employee.getName().equals("admin")){
            return false;
        }
        Optional<List<UserOrder>> userOrders = userOrderRepository.findAllByEmployeeId(employee);
        System.out.println(userOrders.get().size());
        if(userOrders.get().size() != 0){
            userOrders.get().stream().forEach((userOrder -> {
                userOrderRepository.addEmployeeToOrder(admin, userOrder.getOrderId());
            }));
        }

        employeeRepository.delete(employee);
        return true;
    }
}

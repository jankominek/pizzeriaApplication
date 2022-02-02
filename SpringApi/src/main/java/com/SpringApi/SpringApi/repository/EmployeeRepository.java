package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    Employee findEmployeeByEmployeeId(Integer id);
    Optional<Employee> findEmployeeByEmail(String email);
}

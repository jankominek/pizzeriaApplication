package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

    @Override
    List<City> findAll();

}

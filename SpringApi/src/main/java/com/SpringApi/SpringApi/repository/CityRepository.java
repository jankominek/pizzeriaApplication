package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

    City findCityByCityId(Integer id);
}

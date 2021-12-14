package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.City;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CityRepository extends CrudRepository<City, Integer> {

    @Override
    Optional<City> findById(Integer integer);
}

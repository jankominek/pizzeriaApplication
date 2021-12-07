package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.City;
import com.SpringApi.SpringApi.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    @Autowired
    CityRepository cityRepository;

    public List<City> getCities(){
           return cityRepository.findAll();
    };
}

package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.City;
import com.SpringApi.SpringApi.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class CityService {

    @Autowired
    CityRepository cityRepository;

    public List<City> getCities(){
        return (List<City>) cityRepository.findAll();
    };
}

package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.Voivodeship;
import com.SpringApi.SpringApi.repository.VoivodeshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoivodeshipService {

    @Autowired
    VoivodeshipRepository voivodeshipRepository;

//    public List<Voivodeship> findAllVoivodeships() {
//        return (List<Voivodeship>) voivodeshipRepository.findAll();
//    }
}

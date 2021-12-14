package com.SpringApi.SpringApi.controller;

import com.SpringApi.SpringApi.model.Voivodeship;
import com.SpringApi.SpringApi.repository.VoivodeshipRepository;
import com.SpringApi.SpringApi.service.VoivodeshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/voivodeship")
public class VoicodeshipController {

    @Autowired
    VoivodeshipService voivodeshipService;

//    @GetMapping("/all")
//    public List<Voivodeship> findAllVoivodeships(){
//        return voivodeshipService.findAllVoivodeships();
//    }
}

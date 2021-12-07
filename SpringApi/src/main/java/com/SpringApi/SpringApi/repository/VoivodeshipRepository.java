package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Voivodeship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VoivodeshipRepository extends JpaRepository<Voivodeship, Integer> {

    @Override
    List<Voivodeship> findAll();
}

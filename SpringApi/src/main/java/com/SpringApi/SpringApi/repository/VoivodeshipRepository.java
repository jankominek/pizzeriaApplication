package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Voivodeship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VoivodeshipRepository extends JpaRepository<Voivodeship, Integer> {

    Voivodeship findVoivodeshipByVoivodeshipId(Integer id);
}

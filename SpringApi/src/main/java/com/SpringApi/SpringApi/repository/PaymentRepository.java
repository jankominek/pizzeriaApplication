package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    Payment findByType(String type);
}

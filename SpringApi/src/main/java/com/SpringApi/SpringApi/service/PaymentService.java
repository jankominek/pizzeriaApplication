package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.model.Payment;
import com.SpringApi.SpringApi.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    PaymentRepository paymentRepository;

    public Payment getPaymentByType(String type){
        return paymentRepository.findByType(type);
    }
}

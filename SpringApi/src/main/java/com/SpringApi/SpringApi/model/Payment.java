package com.SpringApi.SpringApi.model;

import com.SpringApi.SpringApi.utils.PaymentEnum;
import lombok.Data;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Table(name = "Payment")
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_payment")
    private BigInteger id_payment;

    @Column(name = "type")
    private PaymentEnum type;

    @OneToOne(mappedBy = "payment")
    private UserOrder indent;
}

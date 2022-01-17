package com.SpringApi.SpringApi.model;

import com.SpringApi.SpringApi.utils.PaymentEnum;
import lombok.Data;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "payment")
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="paymentId")
    private Integer paymentId;

    @Column(name = "type")
    private String type;

    @OneToMany(mappedBy = "payment")
    private List<UserOrder> indent;
}

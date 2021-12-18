package com.SpringApi.SpringApi.model;


import com.SpringApi.SpringApi.utils.PaymentEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.stream.Stream;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name="user_order")
public class UserOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_order")
    private BigInteger id_order;

    @Column(name = "date")
    private Timestamp date;
//
//    @Column(name = "time")
//    private Time time;

    @OneToOne()
    @JoinColumn(name = "id_payment", referencedColumnName = "id_payment")
    private Payment payment;

    @Column(name = "status")
    private Boolean status;

    @Column(name = "price")
    private Float price;

    @ManyToOne()
    @JoinColumn(name = "userId", nullable = false)
    private User userId;

}

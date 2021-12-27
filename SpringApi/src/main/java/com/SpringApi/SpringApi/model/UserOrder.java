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
@Table(name="userOrder")
public class UserOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="orderId")
    private Integer orderId;

    @Column(name = "date")
    private Timestamp date;

    @OneToOne()
    @JoinColumn(name = "paymentId", referencedColumnName = "paymentId")
    private Payment payment;

    @Column(name = "status")
    private Boolean status;

    @Column(name = "price")
    private Float price;

    @Column(name = "priceDate")
    private Timestamp price_date;

    @ManyToOne()
    @JoinColumn(name = "userId", nullable = false)
    private User userId;

}

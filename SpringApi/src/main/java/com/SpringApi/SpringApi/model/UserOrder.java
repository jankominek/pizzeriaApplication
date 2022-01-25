package com.SpringApi.SpringApi.model;


import com.SpringApi.SpringApi.utils.PaymentEnum;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @JsonManagedReference
    @ManyToOne()
    @JoinColumn(name = "paymentId")
    private Payment payment;

    @Column(name = "adressOrder")
    private String adressOrder;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "status")
    private Integer status;

    @Column(name = "price")
    private Float price;

    @Column(name = "priceDate")
    private Timestamp price_date;

    @JsonManagedReference
    @ManyToOne()
    @JoinColumn(name = "userId", nullable = false)
    private User userId;

    @JsonManagedReference
    @ManyToOne()
    @JoinColumn(name = "employeeId")
    private Employee employeeId;

    @JsonBackReference
    @OneToMany(mappedBy = "userOrder")
    private List<DishOrder> dishOrderList;


}

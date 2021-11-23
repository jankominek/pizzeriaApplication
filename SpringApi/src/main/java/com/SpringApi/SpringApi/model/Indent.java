package com.SpringApi.SpringApi.model;


import com.SpringApi.SpringApi.utils.PaymentEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Time;
import java.util.Date;
import java.util.stream.Stream;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="asd")
public class Indent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_indent")
    private BigInteger id_indent;

    @Column(name = "date")
    private Date date;

    @Column(name = "time")
    private Time time;

    @OneToOne()
    @JoinColumn(name = "id_payment", referencedColumnName = "id_payment")
    private Payment payment;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "userId", nullable = false)
    private User userId;


}

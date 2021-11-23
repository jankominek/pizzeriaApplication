package com.SpringApi.SpringApi.model;

import com.SpringApi.SpringApi.utils.PersonType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="user")
public class User {

    @Id
    @Column(name ="user_id")
    private UUID userId;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @OneToOne()
    @JoinColumn(name = "id_voivodeship", referencedColumnName = "id_voivodeship")
    private Voivodeship voivodeship;

    @OneToOne()
    @JoinColumn(name = "id_city", referencedColumnName = "id_city")
    private City city;

    @Column(name = "typ")
    @Enumerated(EnumType.STRING)
    private PersonType type;

    @Column(name = "veryfication_code")
    private String v_code;

    @Column(name = "isVerified")
    private Boolean isVerified;

    @OneToMany(mappedBy = "userId", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Indent> orders;
}

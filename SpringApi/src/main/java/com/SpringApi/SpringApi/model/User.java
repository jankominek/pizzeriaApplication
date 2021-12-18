package com.SpringApi.SpringApi.model;

import com.SpringApi.SpringApi.utils.PersonType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "id_voivodeship")
    private Voivodeship voivodeship;

    @ManyToOne()
    @JoinColumn(name = "id_city")
    private City city;

    @Column(name = "typ")
    @Enumerated(EnumType.STRING)
    private PersonType type;

    @Column(name = "veryfication_code")
    private String v_code;

    @Column(name = "isVerified")
    private Boolean isVerified;

    @OneToMany(mappedBy = "userId")
    private List<UserOrder> orders;
}

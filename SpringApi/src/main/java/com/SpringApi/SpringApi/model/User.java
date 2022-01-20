package com.SpringApi.SpringApi.model;

import com.SpringApi.SpringApi.utils.PersonType;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name ="userId")
    private Integer userId;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "veivodeship")
    private Voivodeship voivodeship;

    @ManyToOne()
    @JoinColumn(name = "cityId")
    private City city;

    @Column(name = "typ")
    @Enumerated(EnumType.STRING)
    private PersonType type;

    @Column(name = "veryficationCode")
    private String vCode;

    @Column(name = "isVerified")
    private Boolean isVerified;

    @JsonBackReference
    @OneToMany(mappedBy = "userId")
    private List<UserOrder> orders;
}

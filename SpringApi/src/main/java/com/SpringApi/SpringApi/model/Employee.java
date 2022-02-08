package com.SpringApi.SpringApi.model;

import com.SpringApi.SpringApi.utils.PersonType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "employee")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer employeeId;

    @Column(name = "name")
    private String name;

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

    @JsonBackReference
    @OneToMany(mappedBy = "employeeId")
    private List<UserOrder> orders;
}

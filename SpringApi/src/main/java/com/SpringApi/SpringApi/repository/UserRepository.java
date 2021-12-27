package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {

//    @Query(value = "SELECT * FROM User WHERE email = ?1", nativeQuery = true)
//    User findByEmail(String email);
//
    @Modifying
    @Query(value = "UPDATE User u SET u.isVerified = 1 WHERE u.email = :email")
    void verifyAccount(@Param(value = "email") String email);

    @Query("select u from User u where u.email = ?1")
    User findUserByEmail(String email);

}

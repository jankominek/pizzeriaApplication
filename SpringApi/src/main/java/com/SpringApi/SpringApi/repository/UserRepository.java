package com.SpringApi.SpringApi.repository;

import com.SpringApi.SpringApi.model.User;
import org.hibernate.type.descriptor.sql.VarcharTypeDescriptor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

//    @Query(value = "SELECT * FROM User WHERE email = ?1", nativeQuery = true)
//    User findByEmail(String email);
//
    @Modifying
    @Query(value = "UPDATE User u SET u.isVerified = 1 WHERE u.email = :email")
    void verifyAccount(@Param(value = "email") String email);

    User findUserByUserId(Integer id);

    @Query("select u from User u where u.email = ?1")
    Optional<User> findUserByEmail(String email);

    @Procedure("editUser")
    void editUser(String curremail, String vfn, String vln, String vemail, String vpassword, Integer vvoivodeship, Integer vcity);





}

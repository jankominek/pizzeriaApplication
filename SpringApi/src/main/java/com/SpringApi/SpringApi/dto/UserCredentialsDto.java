package com.SpringApi.SpringApi.dto;

import com.SpringApi.SpringApi.model.User;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserCredentialsDto {

    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Integer voivodeship_id;
    private Integer city_id;
}

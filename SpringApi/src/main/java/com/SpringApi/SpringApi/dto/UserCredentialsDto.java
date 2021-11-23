package com.SpringApi.SpringApi.dto;

import com.SpringApi.SpringApi.model.User;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserCredentialsDto {

    private String email;
    private String password;
}

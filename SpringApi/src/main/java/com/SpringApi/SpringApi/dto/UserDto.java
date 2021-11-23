package com.SpringApi.SpringApi.dto;

import com.SpringApi.SpringApi.utils.PersonType;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.UUID;

@Data
@Builder
public class UserDto {
    private UUID userId;
    private String email;
    private String password;
    private PersonType type;
    private String v_code;
    private Boolean isVerified;
}

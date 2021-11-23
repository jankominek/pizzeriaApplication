package com.SpringApi.SpringApi.dto;

import com.SpringApi.SpringApi.utils.PersonType;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class UserInfoDto {
        private UUID userId;
        private String email;
        private PersonType type;
        private Boolean isVerified;
}

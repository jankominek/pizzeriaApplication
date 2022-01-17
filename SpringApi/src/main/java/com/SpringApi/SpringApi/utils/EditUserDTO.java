package com.SpringApi.SpringApi.utils;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EditUserDTO {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Integer voivodeship_id;
    private Integer city_id;
}

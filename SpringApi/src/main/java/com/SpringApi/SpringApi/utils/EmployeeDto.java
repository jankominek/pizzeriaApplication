package com.SpringApi.SpringApi.utils;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class EmployeeDto {
    private Integer employeeId;
    private String email;
    private String name;
    private String lastName;
    private String role;
}

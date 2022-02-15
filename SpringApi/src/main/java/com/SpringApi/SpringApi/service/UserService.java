package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.dto.UserCredentialsDto;
import com.SpringApi.SpringApi.dto.UserInfoDto;
import com.SpringApi.SpringApi.model.City;
import com.SpringApi.SpringApi.model.Employee;
import com.SpringApi.SpringApi.model.Voivodeship;
import com.SpringApi.SpringApi.repository.CityRepository;
import com.SpringApi.SpringApi.repository.EmployeeRepository;
import com.SpringApi.SpringApi.repository.UserRepository;
import com.SpringApi.SpringApi.model.User;
import com.SpringApi.SpringApi.repository.VoivodeshipRepository;
import com.SpringApi.SpringApi.utils.EditUserDTO;
import com.SpringApi.SpringApi.utils.PersonType;
import com.SpringApi.SpringApi.utils.UserVerification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    VoivodeshipRepository voivodeshipRepository;
    @Autowired
    CityRepository cityRepository;

    @Autowired
    EmailSenderService emailSenderService;

    @Autowired
    EmployeeRepository employeeRepository;

    public Optional<User> getUser(String email) {
        return userRepository.findUserByEmail(email);
    }


    public UserCredentialsDto getUserCredentialsDto(String email){
        User user = getUser(email).get();
        return UserCredentialsDto.builder()
                .firstname(user.getFirstname())
                .lastname(user.getLastName())
                .email(user.getEmail())
                .password(user.getPassword())
                .voivodeship_id(user.getVoivodeship().getVoivodeshipId())
                .city_id(user.getCity().getCityId()).build();
    }

    public Boolean checkUserByPassword(Integer id, String password){
        User user = userRepository.findUserByUserId(id);
        if(password.equals(user.getPassword())){
            return true;
        }
        return false;
    }

    public String loginUser(UserCredentialsDto user){

            Optional<User> isUserExists = getUser(user.getEmail());
        System.out.println("is user exists? " + !isUserExists.isEmpty());
            if(!isUserExists.isEmpty()){
                User userEntity = getUser(user.getEmail()).get();
                UserCredentialsDto userAuth = toCredentialsUserDto(userEntity);

                if (!userAuth.getEmail().equals(user.getEmail()) || !userAuth.getPassword().equals(user.getPassword())) {
                    System.out.println("nie udalo sie zalogowac");
                    return null;
                }
                System.out.println("udalo sie zalogować");
                return userEntity.getType().toString();
            }

            Optional<Employee> isEmployeeExists = employeeRepository.findEmployeeByEmail(user.getEmail());
        System.out.println("is employee exists? " + !isEmployeeExists.isEmpty());
            if(!isEmployeeExists.isEmpty()){
                Employee employee = employeeRepository.findEmployeeByEmail(user.getEmail()).get();
                UserCredentialsDto userAuth = toCredentialsEmployeeDto(employee);

                if (!userAuth.getEmail().equals(user.getEmail()) || !userAuth.getPassword().equals(user.getPassword())) {
                    System.out.println("nie udalo sie zalogowac");
                    return null;
                }
                System.out.println("udalo sie zalogować");
                return employee.getType().toString();
            }

            return null;
    }

    public UserInfoDto getUserInfo(String email){
        if(!getUser(email).isEmpty()){
            User userEntity = getUser(email).get();
            return UserEntityToUserInfoDto(userEntity);
        }
        return null;
    }

    public void registerUser(UserCredentialsDto user){
        User userEntity = credentialsDtoToUser(user);
//        System.out.println(userEntity.getVoivodeship().getVoivodeshipName());
        emailSenderService.sendEmail(user.getEmail(), userEntity.getVCode());
        userRepository.save(userEntity);
    }

    @Transactional
    public Boolean verifyAccount(UserVerification userVerification) {
        String codeEntity = getUser(userVerification.getEmail()).get().getVCode();
        System.out.println(codeEntity);
        if(codeEntity.equals(userVerification.getV_code())) {
            System.out.println("before verification");
            userRepository.verifyAccount(userVerification.getEmail());
            return true;
        }

        return false;
    }

    public UserInfoDto UserEntityToUserInfoDto(User user){
        return UserInfoDto.builder()
                .userId(user.getUserId())
                .name(user.getFirstname())
                .email(user.getEmail())
                .type(user.getType())
                .isVerified(user.getIsVerified()).build();
    }
    public UserCredentialsDto toCredentialsUserDto(User user){
        return UserCredentialsDto.builder()
                .email(user.getEmail())
                .password(user.getPassword()).build();
    }

    public UserCredentialsDto toCredentialsEmployeeDto(Employee employee){
        return UserCredentialsDto.builder()
                .email(employee.getEmail())
                .password(employee.getPassword()).build();
    }

    public User credentialsDtoToUser(UserCredentialsDto user){
        UUID uuid = UUID.randomUUID();
        Voivodeship voivodeship = voivodeshipRepository.findVoivodeshipByVoivodeshipId(user.getVoivodeship_id());
        City city = cityRepository.findCityByCityId(user.getCity_id());
        return User.builder()
                .firstname(user.getFirstname())
                .lastName(user.getLastname())
                .email(user.getEmail())
                .password(user.getPassword())
                .city(city)
                .voivodeship(voivodeship)
                .type(PersonType.KLIENT)
                .vCode(uuid.toString())
                .isVerified(false).build();
    }

    public void updateUserCredentials(String curremail, EditUserDTO newUser) {
        userRepository.editUser(curremail,
                newUser.getFirstname(),
                newUser.getLastname(),
                newUser.getEmail(),
                newUser.getPassword(),
                newUser.getVoivodeship_id(),
                newUser.getCity_id()
        );
    }
}

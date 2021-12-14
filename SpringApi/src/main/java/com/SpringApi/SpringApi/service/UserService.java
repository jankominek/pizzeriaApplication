package com.SpringApi.SpringApi.service;

import com.SpringApi.SpringApi.dto.UserCredentialsDto;
import com.SpringApi.SpringApi.dto.UserInfoDto;
import com.SpringApi.SpringApi.model.City;
import com.SpringApi.SpringApi.model.Voivodeship;
import com.SpringApi.SpringApi.repository.CityRepository;
import com.SpringApi.SpringApi.repository.UserRepository;
import com.SpringApi.SpringApi.model.User;
import com.SpringApi.SpringApi.repository.VoivodeshipRepository;
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

    public User getUser(String email) {
        return userRepository.findByEmail(email);
    }

    public Boolean loginUser(UserCredentialsDto user){
        User userEntity = getUser(user.getEmail());
        UserCredentialsDto userAuth = toCredentialsDto(userEntity);

            if (!userAuth.getEmail().equals(user.getEmail()) || !userAuth.getPassword().equals(user.getPassword())) {
                System.out.println("nie udalo sie zalogowac");
                return false;
            }
            System.out.println("udalo sie zalogować");
            return true;
    }

    public UserInfoDto getUserInfo(String email){
        User userEntity = getUser(email);
        return UserEntityToUserInfoDto(userEntity);
    }

    public void registerUser(UserCredentialsDto user){
        User userEntity = credentialsDtoToUser(user);
        emailSenderService.sendEmail("pizzeriapp21@gmail.com", userEntity.getV_code());
        userRepository.save(userEntity);
    }

    @Transactional
    public Boolean verifyAccount(UserVerification userVerification) {
        String codeEntity = getUser(userVerification.getEmail()).getV_code();
        System.out.println(codeEntity);
        if(codeEntity.equals(userVerification.getV_code())) {
            System.out.println("before verification");
            userRepository.verifyAccount(userVerification.getEmail());
            return true;
        }

        return false;
    }

    public UserInfoDto UserEntityToUserInfoDto(User user){
        return UserInfoDto.builder().userId(user.getUserId())
                .email(user.getEmail())
                .type(user.getType())
                .isVerified(user.getIsVerified()).build();
    }
    public UserCredentialsDto toCredentialsDto(User user){
        return UserCredentialsDto.builder()
                .email(user.getEmail())
                .password(user.getPassword()).build();
    }

    public User credentialsDtoToUser(UserCredentialsDto user){
        UUID uuid = UUID.randomUUID();
        Optional<Voivodeship> voivodeship = voivodeshipRepository.findById(user.getVoivodeship_id());
        Optional<City> city = cityRepository.findById(user.getCity_id());
        return User.builder().userId(uuid)
                .firstname(user.getFirstname())
                .lastName(user.getLastname())
                .email(user.getEmail())
                .password(user.getPassword())
                .city(city.get())
                .voivodeship(voivodeship.get())
                .type(PersonType.KLIENT)
                .v_code(uuid.toString())
                .isVerified(false).build();
    }
}

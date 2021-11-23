package com.SpringApi.SpringApi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailSenderService {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String receiver, String body){
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setFrom("pizzeriapp21@gmail.com");
        simpleMailMessage.setSubject("Please verify your adress e-mail");
        simpleMailMessage.setTo(receiver);
        simpleMailMessage.setText("Your verification code:  " + body);

        javaMailSender.send(simpleMailMessage);
    }
}

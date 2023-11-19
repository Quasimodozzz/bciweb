package com.web.service;

import com.web.pojo.MailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;

import javax.mail.MessagingException;

public interface SendMailService {
    public String sendEmail(String username,String email) throws MessagingException;

    public String sendEmail(String email) throws MessagingException;

    public String checkEmail(String email,String code);


}

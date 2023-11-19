package com.web.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.bind.annotation.RequestParam;

import javax.mail.MessagingException;
import javax.servlet.http.HttpSession;

public interface UserService{
    public String login(HttpSession session,String username, String password);

    public String enroll(String name,String password,String telephone, String e_mail,String code);

    public String getcode(String email, HttpSession session) throws MessagingException;
}

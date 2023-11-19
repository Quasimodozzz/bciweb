package com.web.Controller;

import com.web.mapper.EnrollMapper;
//import com.web.mapper.ForgetMapper;
import com.web.mapper.UserMapper;
import com.web.pojo.User;
import com.web.service.UserService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@CrossOrigin//跨域注解
@RestController

public class UserController {

    @Autowired
    private UserService userService;

    //登录功能
    @RequestMapping("/login")

    public String login(HttpSession session,@RequestParam("username") String username, @RequestParam("password") String password) {
        return userService.login(session,username,password);
    }

    //注册功能

    @RequestMapping("/userenroll")
    public String enroll(@RequestParam("name") String name, @RequestParam("password") String password,@RequestParam("telephone") String telephone,
                         @RequestParam("email") String email,@RequestParam("code") String code){
        return userService.enroll(name, password, telephone, email, code);
    }

    @RequestMapping("/getcode")
    public String getcode(@RequestParam("email") String email, HttpSession session) throws MessagingException{
        return userService.getcode(email,session);

    }


}




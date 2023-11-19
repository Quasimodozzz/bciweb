package com.web.Controller;

import com.web.mapper.ResetMapper;
import com.web.mapper.UserMapper;
import com.web.pojo.User;
import com.web.service.SendMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import redis.clients.jedis.Jedis;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@CrossOrigin
@RestController
public class EmailcodeController{
    @Autowired
    SendMailService sendMailService;

    @Autowired
    JavaMailSenderImpl mailSender;

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ResetMapper resetMapper;

    @RequestMapping("/reg_sendEmail")
    public String sendemail(@RequestParam("email") String email) throws MessagingException {
        return sendMailService.sendEmail(email);
    }

    @RequestMapping("/reset_sendEmail")
    public String sendemail(@RequestParam("username") String username,@RequestParam("email") String email) throws MessagingException {
        return sendMailService.sendEmail(username,email);
    }





    @RequestMapping("/resetP")
    public String resetP(@RequestParam("password") String password,@RequestParam("repassword") String repassword, HttpSession session){
        List<User> users = userMapper.selectUser();
        String state = "";
        int uid = (int) session.getAttribute("userID");
        if (password.equals(repassword)){
            resetMapper.resetP(uid,password);
            state = "update successfully";
            session.removeAttribute("userID");
        }else{
            state = "error";
        }
        return state;
    }
}


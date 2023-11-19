package com.web.service.Impl;

import com.web.mapper.EnrollMapper;
import com.web.mapper.UserMapper;
import com.web.pojo.User;
import com.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;

    @Autowired
    RedisTemplate redisTemplate;

    @Autowired
    EnrollMapper enrollMapper;

    @Autowired
    JavaMailSenderImpl mailSender;

    @Override
    public String login(HttpSession session, String username, String password) {
        List<User> users = userMapper.selectUser();
        User myUser=null;
        System.out.println("111");
        for(int n=0;n<=users.size()-1;n++){

            if(username.equals(users.get(n).getUsername())){
                myUser=users.get(n);
                break;
            }
            if (n==users.size()-1){
                return "nouser";
            }
        }
        if(password!=null){
            if(myUser!=null&&myUser.getPassword().equals(password)){
//                redisTemplate.opsForValue().increment("view");
                session.setAttribute(username,password);
                return "OK";
            }
        }
        System.out.println("password error");
        return "password error";
    }

    @Override
    public String enroll(String name, String password, String telephone, String e_mail, String code) {
        List<User> users = userMapper.selectUser();
        String state = "";
        for(int n=0;n<=users.size()-1;n++){
            if(e_mail.equals(users.get(n).getEmail())){
                state = "haveemail";
                break;
            } else if(name.equals(users.get(n).getUsername())){
                state = "haveuser";
                break;
            }else if((n==users.size()-1)){
                String key = e_mail+"key";
                String realcode = (String) redisTemplate.opsForValue().get(key);
                if(code.equals(realcode)){
                    enrollMapper.addUser(name,password,telephone,e_mail);
                    state = "success";
                }else {
                    state = "codewrong";
                }

            }
        }
        return state;
    }

    @Override
    public String getcode(String email, HttpSession session) throws MessagingException {
        String state = "error";

        int count=1;//默认发送一次
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage,true);
        while(count--!=0) {
            String codeNum = "";
            int[] code = new int[3];
            Random random = new Random();
            //自动生成验证码
            for (int i = 0; i < 6; i++) {
                int num = random.nextInt(10) + 48;
                int uppercase = random.nextInt(26) + 65;
                int lowercase = random.nextInt(26) + 97;
                code[0] = num;
                code[1] = uppercase;
                code[2] = lowercase;
                codeNum += (char) code[random.nextInt(3)];
            }
            System.out.println(codeNum);

            String key = email + "key";
            String value = codeNum;

            redisTemplate.opsForValue().set(key, value, 300, TimeUnit.SECONDS);   //在redis中存储验证码，时长为5分钟
            //标题
            helper.setSubject("您的验证码为：" + codeNum);
            //内容
            helper.setText("您好！您脑机接口虚拟仿真网站的验证码为：" + "<h2>" + codeNum + ",此验证码在五分钟内有效" + "</h2>", true);
            //邮件接收者
            helper.setTo(email);
            //邮件发送者，必须和配置文件里的一样，不然授权码匹配不上
            helper.setFrom("hdu_bcilab_send@163.com");
            mailSender.send(mimeMessage);
            System.out.println("邮件发送成功！" + (count + 1));
            state = "success";
        }
        return state;
    }


}

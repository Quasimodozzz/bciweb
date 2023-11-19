package com.web.service.Impl;

import com.web.mapper.ResetMapper;
import com.web.mapper.UserMapper;
import com.web.pojo.MailRequest;
import com.web.pojo.User;
import com.web.service.SendMailService;
import lombok.Value;
import org.mybatis.logging.Logger;
import org.mybatis.logging.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@Service
public class SendMailServiceImpl implements SendMailService {
    @Autowired
    JavaMailSenderImpl mailSender;

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ResetMapper resetMapper;

    //注册时发送验证码（需要验证用户名是否已存在）
    @Override
    public String sendEmail(String username,String email) throws MessagingException {
        List<User> users = userMapper.selectUserByName(username);
        List<User> users1 = userMapper.selectUserByEmail(email);

        if (!users.isEmpty()) return "user exist";
        else if(!users1.isEmpty()) return "email exist";
        else {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
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

            redisTemplate.opsForValue().set(key, value, 300, TimeUnit.SECONDS);
            //标题
            helper.setSubject("您的验证码为：" + codeNum);
            //内容
            helper.setText("您好！您脑机接口虚拟仿真网站的验证码为：" + "<h2>" + codeNum + ",此验证码在五分钟内有效" + "</h2>", true);
            //邮件接收者
            helper.setTo(email);
            //邮件发送者，必须和配置文件里的一样，不然授权码匹配不上
            helper.setFrom("hdu_bcilab_send@163.com");
            mailSender.send(mimeMessage);
            System.out.println("邮件发送成功！");
            return "success";
        }
    }

    //找回密码时发送验证码
    @Override
    public String sendEmail(String email) throws MessagingException {
        List<User> users = userMapper.selectUserByEmail(email);
        if(users.isEmpty()) return "email is not exist";
        else {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
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

            redisTemplate.opsForValue().set(key, value, 300, TimeUnit.SECONDS);
            //标题
            helper.setSubject("您的验证码为：" + codeNum);
            //内容
            helper.setText("您好！您脑机接口虚拟仿真网站的验证码为：" + "<h2>" + codeNum + ",此验证码在五分钟内有效" + "</h2>", true);
            //邮件接收者
            helper.setTo(email);
            //邮件发送者，必须和配置文件里的一样，不然授权码匹配不上
            helper.setFrom("hdu_bcilab_send@163.com");
            mailSender.send(mimeMessage);
            System.out.println("邮件发送成功！");
            return "success";
        }
    }

    @Override
    public String checkEmail(String email, String code) {
        List<User> users = userMapper.selectUserByEmail(email);
        if(users.isEmpty()) return "no code";
        else{
            String key = email + "key";
            String real_code = (String) redisTemplate.opsForValue().get(key);
            if(real_code==null) return "no code";
            else if(!real_code.equals(code)) return "wrong code";
            else return "success";
        }
    }
}

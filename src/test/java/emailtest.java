import com.web.webApplication;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Random;

@SpringBootTest(classes = webApplication.class)
class emailtest {
    @Autowired
    private JavaMailSenderImpl mailSender;

    @Test
    void contextLoads() throws MessagingException{
        int count=1;//默认发送一次
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage,true);
        while(count--!=0){
            String codeNum = "";
            int [] code = new int[3];
            Random random = new Random();
            //自动生成验证码
            for (int i = 0; i < 6; i++) {
                int num = random.nextInt(10) + 48;
                int uppercase = random.nextInt(26) + 65;
                int lowercase = random.nextInt(26) + 97;
                code[0] = num;
                code[1] = uppercase;
                code[2] = lowercase;
                codeNum+=(char)code[random.nextInt(3)];
            }
            System.out.println(codeNum);
            //标题
            helper.setSubject("您的验证码为："+codeNum);
            //内容
            helper.setText("您好！您脑机接口虚拟仿真网站的验证码为："+"<h2>"+codeNum+"</h2>",true);
            //邮件接收者
            helper.setTo("2082148829@qq.com");
            //邮件发送者，必须和配置文件里的一样，不然授权码匹配不上
            helper.setFrom("hdu_bcilab_send@163.com");
            mailSender.send(mimeMessage);
            System.out.println("邮件发送成功！"+(count+1));
        }
    }
}

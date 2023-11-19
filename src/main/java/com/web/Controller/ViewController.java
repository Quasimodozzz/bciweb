package com.web.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin//跨域注解
@RestController
public class ViewController {
    @Autowired
    private RedisTemplate redisTemplate;
    @RequestMapping("/view")
    public int viewCount() {
        return (int) redisTemplate.opsForValue().get("view");
    }
}

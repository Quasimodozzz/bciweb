package com.web.Controller;


import com.web.mapper.UserMapper;
import com.web.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
class Example {
    @Autowired
    UserMapper userMapper;

    @RequestMapping("/test")
    public List<User> ttest(@RequestParam String username){
        System.out.println("test");
        return userMapper.selectUserByName(username);
    }

}

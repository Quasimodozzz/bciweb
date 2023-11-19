package com.web.mapper;

import com.web.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {
    @Select("select * from users")
    List<User> selectUser();

    @Select("select * from users where username=#{username} ")
    List<User> selectUserByName(String username);

    @Select("select * from users where email=#{email} ")
    List<User> selectUserByEmail(String email);



}

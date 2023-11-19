package com.web.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface EnrollMapper {
    @Insert("insert into users values (null,#{name},#{password},#{telephone},#{email})")
    Boolean addUser(String name, String password,String telephone,String email );
}

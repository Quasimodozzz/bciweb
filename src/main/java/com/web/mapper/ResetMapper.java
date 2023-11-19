package com.web.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ResetMapper {
    @Update("update users set password=#{password} where id=#{uid}")
    Boolean resetP(int uid, String password);
}

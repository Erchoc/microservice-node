package com.jzy.edu.exam.service;

import com.alibaba.fastjson.JSON;
import com.jzy.edu.exam.domain.User;

public interface IUserService {
    // @DataSource("master") // 指定使用主数据源
    public void insertUser(User user);

    // @DataSource("master") // 指定使用从数据源
    public String fin0dUser(int id);

    public int getUser(int id);

    public User findUser(int id);

    public JSON getJsonUser(int i);
}

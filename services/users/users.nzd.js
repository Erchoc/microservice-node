/**
 
 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/4 15:58
 Description:
 
 **/

// 引入nzd配置
const nzd_config = require('../../conf/nzd_conf.js');

const userServices_opt = {
  application:{
    name: nzd_config.application
  },
  register: nzd_config.register,
  dubboVer: nzd_config.dubboVer,
  root: nzd_config.root,
  dependencies: {
    IUserService: {
      interface:'com.jzy.edu.exam.service.IUserService',
      timeout:6000,
      methodSignature: {
        insertUser: user => [
          { $class: 'com.jzy.edu.exam.domain.User', $: user }
        ],
        fin0dUser: id => [{ $class: 'java.lang.Integer', $: id }],
        getUser: id => [{ $class: 'java.lang.Integer', $: id }],
        findUser: id => [{ $class: 'java.lang.Integer', $: id }],
        getJsonUser: i => [{ $class: 'java.lang.Integer', $: i }]
      }
    },
  }
};

exports.userServices_opt = userServices_opt;

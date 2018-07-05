/**
 
 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/4 15:58
 Description:
 
 **/

/**
 * 功能： nzd与java同行的node模块
 * 作者： dpc
 * 日期： 2018/6/27.
 */
//引入nzd配置
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
        fin0dUser: (id) => [{
          '$class': 'int',
          '$': id
        }],
        getUser: (id) => [{
          '$class': 'int',
          '$': id
        }]
      }
    },
  }
};

exports.userServices_opt = userServices_opt;

/**
 
 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/4 16:58
 Description: Users MicroService
 
 **/

'use strict';
const nzd = require('node-zookeeper-dubbo');


const userMock = require('./users.mock.js');
const nzd_config = require('../../conf/nzd_conf.js');
const nzd_config_user = require('./users.nzd.js');

const opt = nzd_config_user.userServices_opt;
opt.java = require('js-to-java');

// 定义dubbo对象并监听事件

const Dubbo=new nzd(opt);
Dubbo.on('service: changed', (event) => {
  console.log(event);
});

module.exports = {
  name: 'users',
  
  /**
   * Service settings
   */
  settings: {
  
  },
  
  /**
   * Service metadata
   */
  metadata: {
  
  },
  
  /**
   * Service dependencies
   */
  dependencies: [],
  
  /**
   * Actions
   */
  actions: {
    
    list: {
      params: {
      
      },
      handler (ctx) {
      
      }
    },
    
    create: {
      params: {
      
      },
      handler (ctx) {
				
				
        return `创建用户${res}`;
      }
    },
    
    remove: {
      params: {
      
      },
      handler (ctx) {
        return `删除用户${data}`;
      }
    },
    
    update: {
      params: {
      
      },
      handler (ctx) {
        const name = ctx.params.name;
        const sex = ctx.params.sex;
        
        return `${name}替换用户${sex}`;
      }
    },
    
    get: {
      params: {
      
      },
      handler (ctx) {
        let data = Dubbo.IUserService.fin0dUser(1);
    
        console.log(data.then()
          .then( data => {
            console.log('string test success');
            console.log(data.toString());
          })
          .catch( err => {
            console.log('err');
          })
        );
      }
    }
  },
  
  /**
   * Events
   */
  events: {
  
  },
  
  /**
   * Methods
   */
  methods: {
  
  },
  
  /**
   * Service created lifecycle event handler
   */
  created () {
  
  },
  
  /**
   * Service started lifecycle event handler
   */
  started () {
  
  },
  
  /**
   * Service stopped lifecycle event handler
   */
  stopped () {
  
  }
};

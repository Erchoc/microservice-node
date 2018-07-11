/**
 
 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/4 16:58
 Description: Users MicroService
 
 **/

const nzd = require('node-zookeeper-dubbo');


const userMock = require('./users.mock.js');
const nzd_config = require('../../conf/nzd_conf.js');
const nzd_config_user = require('./users.nzd.js');

const opt = nzd_config_user.userServices_opt;
opt.java = require('js-to-java');

// 定义dubbo对象并监听事件
/*
const Dubbo = new nzd(opt);
Dubbo.on('service: changed', (event) => {
  console.log(event);
});
*/

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
        // Mock.js
        const data = userMock.list();
        return {'code': 0, 'msg': 'success', 'data': data};

        // Dubbo-ZooKeeper-Dubbo
        /*
        let data = Dubbo.IUserService.findUser(1);
        const r = data.then()
          .then( data => {
            console.log(data);
          })
          .catch( err => err );
        return r;
        */
      }
    },
  
    create: {
      params: {},
      handler (ctx) {
        // Mock.js
        const data = userMock.create();
        if (Object.keys(ctx.params).length === 0) {
          return {'code': 0, 'msg': 'success', 'data': '参数不能为空'};
        }
        data.username = ctx.params.username;
        return {'code': 0, 'msg': 'success', 'data': data};
        
        // Dubbo-ZooKeeper-Dubbo
        
      }
    },
  
    remove: {
      params: {},
      handler (ctx) {
        // Mock.js
        const data = userMock.remove();
        data.id = ctx.params.id;
        return {'code': 0, 'msg': 'success', 'data': data};
  
        // Dubbo-ZooKeeper-Dubbo
  
      }
    },
  
    update: {
      params: {},
      handler (ctx) {
        // Mock.js
        const data = userMock.update();
        if (Object.keys(ctx.params).length === 0) {
          return {'code': 0, 'msg': 'success', 'data': '参数不能为空'};
        }
        data.username = ctx.params.username;
        return {'code': 0, 'msg': 'success', 'data': data};
  
        // Dubbo-ZooKeeper-Dubbo
  
      }
    },
  
    get: {
      params: {

      },
      handler (ctx) {
        // Mock.js
        const data = userMock.get();
        data.id = ctx.params.id;
        return {'code': 0, 'msg': 'success', 'data': data};
  
        // Dubbo-ZooKeeper-Dubbo
        /*
        const id = 2;
        let jsonObj = {'name': '杨雪晋', 'job': 'NodeJS', 'salary': 2500};
        // let data = Dubbo.IUserService.fin0dUser(id);        // String     Success
        // let data = Dubbo.IUserService.findUser(id);         // Object     Success
        // let data = Dubbo.IUserService.getJsonUser(id);      // JSON       Success
        // let data = Dubbo.IUserService.getUser(id);          // Int        ByYourSelf
        
        let data = Dubbo.IUserService.insertUser(jsonObj);  // Void       1成功/0失败
        const res = data
        .then( data => {
          return data;
        })
        .catch( err => {
          // TODO
          return err;
        });
        return res;
        */
      }
    },
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

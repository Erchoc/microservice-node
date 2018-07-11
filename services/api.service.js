/**
 
 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/4 9:36
 Description: Officially Provided API Gateway Service
 
 **/

const ApiGateway = require('moleculer-web');

module.exports = {
  name: 'api',
  mixins: [ApiGateway],
  
  // More info about settings: http://moleculer.services/docs/moleculer-web.html
  settings: {
    port: process.env.PORT || 80,
    
    routes: [{
      path: '/api',
      // authorization: true,
      // 拓展接收 POST 数据
      bodyParsers: {
        urlencoded: {
          extended: true
        }
      },
      aliases: {
        // REST Entities List
  
        'REST /users': 'users',
        'REST /exams': 'exams',
        
        /*
        'POST /users': 'users.create',
        'POST /users/:id': 'users.remove',
        'POST /users/:id': 'users.update',
        'GET /users/:id': 'users.get',
        'GET /users': 'users.list',
        */
        
        // Other Special API
        'POST /users/login': 'users.login',
        'GET /users/logout': 'users.logout',
        'POST /users/register': 'users.register'
      },
      whitelist: [
        // Access to any actions in all services under "/api" URL
        '*'
      ]
    }],
    
    // Serve assets from "public" folder
    assets: {
      folder: 'public'
    }
  }
};


/**
 
 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/4 15:58
 Description:
 
 **/

const Mock = require('mockjs');

// 声明一个随机生成函数
const mockIns = Mock.Random;

// 试卷列表
exports.list = () => {
  return Mock.mock({
    'exams|42': [{
      'msg':'这里是试卷列表数据',
      'id|1-1000': 1000,
      'username': Mock.mock('@cname'),
      'age|1-200': 200,
      'sex|1': true,
      'email': Mock.mock('@email'),
      'avatar': mockIns.image('100x100', '#50B347', '#FFF', 'avatar'),
      'city': Mock.mock('@city'),
      'address': Mock.mock('@county(true)'),
      'desc': '@cparagraph',
      'created_at': mockIns.date('yyyy-MM-dd')
    }]
  });
};

// 新增试卷
exports.create = () => {
  return Mock.mock({
    'msg':'新增试卷成功',
    'id|1-1000': 1000,
    'username': Mock.mock('@cname'),
    'age|1-200': 200,
    'sex|1': true,
    'email': Mock.mock('@email'),
    'avatar': mockIns.image('100x100', '#50B347', '#FFF', 'avatar'),
    'city': Mock.mock('@city'),
    'address': Mock.mock('@county(true)'),
    'desc': '@cparagraph',
    'created_at': mockIns.date('yyyy-MM-dd')
  });
};

// 删除试卷
exports.remove = () => {
  return Mock.mock({
    'msg':'删除试卷成功',
    'id|1-1000': 1000,
    'username': Mock.mock('@cname'),
    'age|1-200': 200,
    'sex|1': true,
    'email': Mock.mock('@email'),
    'avatar': mockIns.image('100x100', '#50B347', '#FFF', 'avatar'),
    'city': Mock.mock('@city'),
    'address': Mock.mock('@county(true)'),
    'desc': '@cparagraph',
    'created_at': mockIns.date('yyyy-MM-dd')
  });
};

// 修改试卷信息
exports.update = () => {
  return Mock.mock({
    'msg':'修改试卷信息成功',
    'id|1-1000': 1000,
    'username': Mock.mock('@cname'),
    'age|1-200': 200,
    'sex|1': true,
    'email': Mock.mock('@email'),
    'avatar': mockIns.image('100x100', '#50B347', '#FFF', 'avatar'),
    'city': Mock.mock('@city'),
    'address': Mock.mock('@county(true)'),
    'desc': '@cparagraph',
    'created_at': mockIns.date('yyyy-MM-dd')
  });
};

// 查询试卷信息
exports.get = () => {
  return Mock.mock({
    'msg':'查询到xxx试卷信息',
    'id|1-1000': 1000,
    'username': Mock.mock('@cname'),
    'age|1-200': 200,
    'sex|1': true,
    'email': Mock.mock('@email'),
    'avatar': mockIns.image('100x100', '#50B347', '#FFF', 'avatar'),
    'city': Mock.mock('@city'),
    'address': Mock.mock('@county(true)'),
    'desc': '@cparagraph',
    'created_at': mockIns.date('yyyy-MM-dd')
  });
};

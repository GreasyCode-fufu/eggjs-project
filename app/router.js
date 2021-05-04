'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);   //根路由
  router.get('/login', controller.home.login);    //登录路由
  router.get('/sea', controller.home.sea);    //主页路由
  router.get('/fails', controller.home.fails);    //错误输入
  router.post('/success', controller.success.index);    //登录提交
  router.get('/introduce', controller.home.introduce);  //介绍路由
  router.get('/forget', controller.forget.index);  //获取忘记密码界面
  router.post('/reset', controller.reset.index);    //重置密码提交
  router.get('/register', controller.register.index);     //获取注册页面
  router.post('/register', controller.register.adduser);    //注册提交
  router.post('/resetpassword', controller.resetpassword.index);    //重置密码提交
  router.get('/usertable', controller.usertable.usertable);   //获取用户表界面
  router.get('/indexbackstage', controller.backstage.index);    //获取后台首页
  router.get('/deleteuser', controller.deleteuser.deleteuser);    //未知（估计没用）
  router.get('/backstage/input', controller.backstage.input);      //未知（估计没用）
  router.post('/usertable', controller.usertable.confirm);        //这个路由应该没用
  router.get('/usertable/deleteuser', controller.deleteuser.deleteuser);    //这个路由应该没用
  router.get('/dataVisual', controller.dataVisual.dataBar);         //获取数据可视化首页
  router.get('/homedetail', controller.home.homedetail);        //获取详细页面（介绍页面）
  router.get('/poem', controller.home.poem);          //点击日本语，获得有日文的界面
  router.get('/senior', controller.home.senior);    //获取高级权限首页
  router.get('/getaddAdmin', controller.addAdmin.getaddAdmin);    //获得添加管理员表单界面
  router.post('/addAdmin', controller.addAdmin.index);      //添加管理员信息提交
  router.post('/verifyAdmin', controller.verifyAdmin.index);    //是否为管理员表单提交验证
  router.get('/userAndAdmin', controller.userAndAdmin.index);   //获取用户与管理员人数数据可视图
  router.get('/contents', controller.content.index);    //获取文章管理首页
  router.get('/deleteAdmin', controller.deleteAdmin.index);   //删除管理员后，刷新管理员页面，显示数据
  router.get('/article/:id', controller.content.article);   //根据id显示对应文章内容
  router.get('/adduser', controller.addUser.index);   //获取添加用户表单
  router.post('/adduser', controller.addUser.adduserSuccess);   //提交添加用户信息
  router.get('/edituser/:userid', controller.editUser.edituser);    //根据userid来获取添加用户表单
  router.post('/edituser/:userid', controller.editUser.edituser);   //提交
  router.get('/gender', controller.gender.index);       //获取性别可视化图
  router.get('/detailUser', controller.detailUser.index);   //获取用户详细信息表

  // 内容增删改查
  router.get('/addcontent', controller.todo.addcontent);    //获取添加文章表单
  router.post('/addcontent', controller.todo.addcontent);     //提交
  router.get('/editcontent/:id', controller.todo.editcontent);    //依据id来编辑文章内容
  router.post('/editcontent/:id', controller.todo.editcontent);   //提交
  router.get('/content', controller.content.list);          //获取各文章显示界面
  router.get('/deletecontent', controller.todo.deletecontent);    //删除文章
  
  // 图片上传
  router.post('/upload',controller.upload.upload);    //上传图片
};

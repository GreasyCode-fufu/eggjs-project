'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.get('/sea', controller.home.sea);
  router.get('/fails', controller.home.fails);
  router.post('/success', controller.success.index);
  router.get('/introduce', controller.home.introduce);
  router.get('/forget', controller.forget.index);
  router.post('/reset', controller.reset.index);
  router.get('/register', controller.register.index); 
  router.post('/register', controller.register.adduser);
  router.post('/resetpassword', controller.resetpassword.index);
  router.get('/usertable', controller.usertable.usertable);
  router.get('/indexbackstage', controller.backstage.index);
  router.get('/deleteuser', controller.deleteuser.deleteuser);
  router.get('/backstage/input', controller.backstage.input);
  router.post('/usertable', controller.usertable.confirm);
  router.get('/usertable/deleteuser', controller.deleteuser.deleteuser);
  router.get('/dataVisual', controller.dataVisual.dataBar);
  router.get('/homedetail', controller.home.homedetail);
  router.get('/poem', controller.home.poem);
  router.get('/senior', controller.home.senior);
  router.get('/getaddAdmin', controller.addAdmin.getaddAdmin);
  router.post('/addAdmin', controller.addAdmin.index);
  router.post('/verifyAdmin', controller.verifyAdmin.index);
  router.get('/userAndAdmin', controller.userAndAdmin.index);
  router.get('/contents', controller.content.index);
  router.get('/deleteAdmin', controller.deleteAdmin.index);
  router.get('/article/:id', controller.content.article);
  router.get('/adduser', controller.addUser.index);
  router.post('/adduser', controller.addUser.adduserSuccess);
  router.get('/edituser/:userid', controller.editUser.edituser);
  router.post('/edituser/:userid', controller.editUser.edituser);
  router.get('/gender', controller.gender.index);
  router.get('/detailUser', controller.detailUser.index);

  // 内容增删改查
  router.get('/addcontent', controller.todo.addcontent);
  router.post('/addcontent', controller.todo.addcontent);
  router.get('/editcontent/:id', controller.todo.editcontent);
  router.post('/editcontent/:id', controller.todo.editcontent);
  router.get('/content',controller.todo.content);
  router.get('/deletecontent', controller.todo.deletecontent);
  
  // 图片上传
  router.post('/upload',controller.upload.upload);
};

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
  router.post('/usertable/deleteuser', controller.usertable.deleteuser);
  router.get('/dataVisual', controller.dataVisual.dataBar);
  router.get('/homedetail', controller.home.homedetail);
  router.get('/poem', controller.home.poem);
  router.get('/senior', controller.home.senior);
  router.get('/getaddAdmin', controller.addAdmin.getaddAdmin);
  router.post('/addAdmin', controller.addAdmin.index);
};

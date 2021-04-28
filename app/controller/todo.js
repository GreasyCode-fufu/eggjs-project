const Controller    = require('egg').Controller;

class TodoController extends Controller {
    async index() {
        let id      = this.ctx.params.id;
        let todo    = await this.ctx.service.todo.getTodo(id);

        await this.ctx.render('todo/index.tpl', {todo});
    }

    async list() {
        let todoes  = await this.ctx.service.todo.getTodoes();

        await this.ctx.render('todo/list.tpl', {todoes});
    }
    

    async add() {
        if (this.ctx.request.method === 'POST') {
            let username=this.ctx.request.body.username;
            let password=this.ctx.request.body.password;

//             console.log(username);
//             console.log(password);

            await this.ctx.service.todo.saveTodo(username,password);

            // await this.ctx.service.todo.saveTodo({
                // username  : this.ctx.request.body.username,
                // password  : this.ctx.request.body.password
            // });

            this.ctx.redirect('/login');
        }

        await this.ctx.render('todo/add.tpl', {});
    }

     
    

    async edit() {
        let id      = this.ctx.params.id;
        let todo    = await this.ctx.service.todo.getTodo(id);

        if (this.ctx.request.method === 'POST') {
            todo.username    = this.ctx.request.body.username;
            todo.password    = this.ctx.request.body.password;

            // console.log(username);
            // console.log(password);

            await this.ctx.service.todo.updateTodo(todo);

            this.ctx.redirect('/list');
        }

        await this.ctx.render('todo/edit.tpl', {todo});
    }


    async delete() {
        let id  = this.ctx.request.query.id;
        await this.ctx.service.todo.deleteTodo(id);

        this.ctx.redirect('/list');
    }



// 栏目
async lanmu() {
            let todoes  = await this.ctx.service.todo.getTodoes1();
    
            await this.ctx.render('todo/lanmu.tpl', {todoes});
        }

async addlanmu() {
            if (this.ctx.request.method === 'POST') {
                let leibie=this.ctx.request.body.leibie;
                
               
    
    //             console.log(username);
    //             console.log(password);
    
                await this.ctx.service.todo.saveTodo1(leibie);
    
                // await this.ctx.service.todo.saveTodo({
                    // username  : this.ctx.request.body.username,
                    // password  : this.ctx.request.body.password
                // });
    
                this.ctx.redirect('/lanmu');
            }
    
            await this.ctx.render('todo/addlanmu.html', {});
        }

     async editlanmu() {
                let id      = this.ctx.params.id;
                let todo    = await this.ctx.service.todo.getTodo1(id);
        
                if (this.ctx.request.method === 'POST') {
                    todo.   leibie = this.ctx.request.body.liebie;
                    
                    // console.log(username);
                    // console.log(password);
        
                    await this.ctx.service.todo.updateTodolanmu(todo);
        
                    this.ctx.redirect('/lanmu');
                }
        
                await this.ctx.render('todo/editlanmu.tpl', {todo});
            }
        async deletelanmu() {
                    let id  = this.ctx.request.query.id;
                    await this.ctx.service.todo.deleteTodolanmu(id);
            
                    this.ctx.redirect('/lanmu');
                }








            // 内容=====================================================================
            // =========================================================================


            async content() {
                        let todoes  = await this.ctx.service.todo.getTodoescontent();
                
                        await this.ctx.render('todo/content.html', {todoes});
                    }
            
            async addcontent() {
                        if (this.ctx.request.method === 'POST') {
                            let title=this.ctx.request.body.title;
                            let text=this.ctx.request.body.text;
                            let cover=this.ctx.request.body.cover
                            let biaoqian=this.ctx.request.body.biaoqian;
                            let zhaiyao=this.ctx.request.body.zhaiyao;
                console.log(cover);
                        
                            await this.ctx.service.todo.saveTodo2(title,text,cover,biaoqian,zhaiyao);
                
                            this.ctx.redirect('/content');
                        }
                
                        await this.ctx.render('todo/addcontent.html', {});
                    }
            
                 async editcontent() {
                            let id      = this.ctx.params.id;
                            let todo    = await this.ctx.service.todo.getTodocontent(id);
                    
                            if (this.ctx.request.method === 'POST') {
                                todo.title = this.ctx.request.body.title;
                                todo.text = this.ctx.request.body.text;
                                todo.cover=this.ctx.request.body.cover;
                                todo.biaoqian = this.ctx.request.body.biaoqian;
                                todo.zhaiyao = this.ctx.request.body.zhaiyao;
                     
                                await this.ctx.service.todo.updateTodocontent(todo);
                    
                                this.ctx.redirect('/content');
                            }
                    
                            await this.ctx.render('todo/editcontent.html', {todo});
                        }
                    async deletecontent() {
                                let id  = this.ctx.request.query.id;
                                await this.ctx.service.todo.deleteTodocontent(id);
                        
                                this.ctx.redirect('/content');
                            }
            
            
                 };     
                    
                    








    


module.exports  = TodoController;
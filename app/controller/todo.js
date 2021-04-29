const Controller    = require('egg').Controller;

class TodoController extends Controller {

            // 内容=====================================================================
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
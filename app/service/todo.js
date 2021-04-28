const Service   = require('egg').Service;

class TodoService extends Service {
    async getTodo(id) {
        return await this.app.mysql.get('denglu', {id});
    }

    async getTodoes()
    {
        return await this.app.mysql.select('denglu', {
            orders: [['id', 'desc']]
        });
    }
   


    async saveTodo(un,pw) {

        console.log("service层接收到的数据：")
        console.log(un);
        console.log(pw);

        let result = await this.app.mysql.insert('denglu',{
            username:un,
            password:pw
        })

        console.log(result);

        // let result  = await this.app.mysql.insert('denglu', todo);

        return result.insertId;
    }
      

    async updateTodo(todo) {
        await this.app.mysql.update('denglu', todo);
    }

    async deleteTodo(id)
    {
        let result  = await this.app.mysql.delete('denglu', {id});

        return result.affectedRows;
    }


// 栏目

async saveTodo1(lb) {

            console.log("service层接收到的数据：")
            console.log(lb);
            
    
            let result = await this.app.mysql.insert('lanmu',{
                leibie:lb
               
            })
    
            console.log(result);
    
            // let result  = await this.app.mysql.insert('denglu', todo);
    
            return result.insertId;
        }

async getTodo1(id) {
            return await this.app.mysql.get('lanmu', {id});
        }
    
     async getTodoes1()
        {
            return await this.app.mysql.select('lanmu', {
                orders: [['id', 'desc']]
            });
        }

    
        async updateTodolanmu(todo) {
                await this.app.mysql.update('lanmu', todo);
            }
        async deleteTodolanmu(id)
    {
        let result  = await this.app.mysql.delete('lanmu', {id});

        return result.affectedRows;
    }


// ====================================================
// 内容=============================================


async saveTodo2(title,text,cover,biaoqian,zhaiyao) {

            console.log("service层接收到的数据：")
            console.log(title);
            console.log(text);
            console.log(cover);
            console.log(biaoqian);
            console.log(zhaiyao);
            
    
            let result = await this.app.mysql.insert('content',{
                title:title,
                text:text,
                cover:cover,
                biaoqian:biaoqian,
                zhaiyao:zhaiyao
               
            })
    
            console.log(result);
            return result.insertId;
        }

        async getTodocontent(id) {
            return await this.app.mysql.get('content', {id});
        }
    
        async getTodoescontent()
        {
            return await this.app.mysql.select('content', {
                orders: [['id', 'desc']]
            });
        }

    
        async updateTodocontent(todo) {
                await this.app.mysql.update('content', todo);
            }
        async deleteTodocontent(id)
    {
        let result  = await this.app.mysql.delete('content', {id});

        return result.affectedRows;
    }
        



}

module.exports  = TodoService;
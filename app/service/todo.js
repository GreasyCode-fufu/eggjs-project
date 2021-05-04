const Service   = require('egg').Service;

class TodoService extends Service {
    // 内容=============================================
        async saveTodo2(title,text,cover,biaoqian,zhaiyao) {
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

        async deleteTodocontent(id){
            let result  = await this.app.mysql.delete('content', {id});

            return result.affectedRows;
    }
        



}

module.exports  = TodoService;
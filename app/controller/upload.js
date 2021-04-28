'use strict';

const Controller = require('egg').Controller;
const fs=require('fs');

class UploadController extends Controller {
    async upload() {
        const { ctx }=this;
        const file=ctx.request.files[0];
        
        const name=file.filename
        var dist='./app/public/admin/upload/'+name;
        let result=await new Promise((resolve,reject)=>{
            fs.copyFile(file.filepath,dist,(error)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(true);
                }
            });
        });
        this.ctx.response.body={
            state:result,
            filename:name
        };
    }



    // async create(){
    //     // 获取文件流
    //     const stream = await this.ctx.getFileStream();
    //     // 定义文件名
    //     const filename=Data.now()+path.extname(stream.filename).toLocalLowerCase();
    //     // 目标文件
    //     const target=path.join('/public/admin/upload/',filename);
    //     // 
    //     const writeStream=fs.createWriteStream(target);
    //     console.log('-----------获取表单中其它数据 start--------------');
    //     console.log(stream.fields);
    //     console.log('-----------获取表单中其它数据 end--------------');
    //     try {
    //       //异步把文件流 写入
    //       await awaitWriteStream(stream.pipe(writeStream));
    //     } catch (err) {
    //       //如果出现错误，关闭管道
    //       await sendToWormhole(stream);
    //       // 自定义方法
    //       this.error(err);
    //     }
    //     // 自定义方法
    //     this.success({ url: '/public/admin/upload/' + filename });
    //   }
};

module.exports = UploadController;

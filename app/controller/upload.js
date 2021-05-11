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
};

module.exports = UploadController;

/**
 * Created by Administrator on 2017/6/5.
 */
export  interface ResponseData<T>{
     data:T;
}
export interface RequestData{

}

export  interface product{
    Id:number;
    Name:string,
    Category:string,
    Price:number
}

export interface FamliyTreeArticleView
{
    Content:string;
    Cover:string;
    Created:Date;
    CreatedBy:string;
    ID:string;
    Modified:Date;
    ModifiedBy:string;

}


 export  default class Api{
    url:string;
    static service:Api = new Api();

   constructor( ){
       this.url ="http://192.168.0.210:9632/api/Products";
   }

   get(req?:RequestData):Promise<product[]>{
        return new Promise((resolve,reject)=>{
           return $.get({url:this.url, data:req}).done((data:product[])=>{
               resolve(data);
           }).fail((result) =>{
              reject(result);
           });
        });
   }

}
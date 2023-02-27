import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";


@Injectable()
export class Taskservice
{
     constructor( private client : HttpClient ){}
   url = "http://localhost:3000/posts";
              
   getpost()
   {
    return this.client.get(this.url);
   }

   editstatus(chId:number,value: object)
   {
      return  this.client.put(this.url+"/"+chId,value);
   }
}
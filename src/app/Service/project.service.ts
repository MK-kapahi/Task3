import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ProjectService 
{
     constructor( private client : HttpClient ){}
   url = "  http://localhost:3000/comments";

   getpost(): Observable<any>
   {
    return this.client.get<any>(this.url);
   }

   editstatus(chId:number,value: object)
   {
      return  this.client.put(this.url+"/"+chId,value);
   }

}
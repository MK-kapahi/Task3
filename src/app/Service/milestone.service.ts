import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class Milestoneservice 
{

   constructor( private client : HttpClient ){}
   url = " http://localhost:3000/profile";

   getpost()
   {
    return this.client.get(this.url)
   }

   editstatus(chId:number,value: object)
   {
      return  this.client.put(this.url+"/"+chId,value);
   }
   
}
import {Component, OnInit} from '@angular/core'
import { Observable } from 'rxjs';
import { DisplayComponent } from '../Display/display.component';
import { Taskservice } from '../Service/task.service';

@Component
({
   selector :'app-task',
   templateUrl :'./task.component.html',
   styleUrls : ['./task.component.css']
})

export class TaskComponent implements OnInit
{
      T_array:any=[]
      id!:number;
      constructor(private service: Taskservice, private dis : DisplayComponent){
      }
      ngOnInit()
      {
            this.service.getpost().subscribe(
                  (response)=>
               {
                this.T_array = response;

               }
               )
            alert(JSON.stringify(this.T_array))
            console.log(this.T_array);
      }

      update(data:any)
      {
            const id = data.ID;
   const val = data.value;
   const index = data.index;
   let reason;
     

   if(val === 'Cancel' || val === 'on_hold')
   {
       reason =prompt("Enter your reason");
   }

   if(reason =!null)
   {
   this.T_array[index].status=val;
   this.service.editstatus(id,this.T_array[index]).subscribe((res)=>{
      console.log(res);
   })
}
      }
}
import {Component, OnInit} from '@angular/core'
import { Observable } from 'rxjs';
import { DisplayComponent } from '../Display/display.component';
import { ProjectService } from '../Service/project.service';

@Component
({
   selector :'app-project',
   templateUrl :'./project.component.html',
   styleUrls : ['./project.component.css']
})

export class ProjectComponent implements OnInit
{

      P_array:any=[];
      id = this.dis.Id;
      constructor(private service : ProjectService, private dis : DisplayComponent){}
      ngOnInit(): void {
            this.service.getpost().subscribe(
                  (response)=>
               {
                this.P_array = response;
               }
               )
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
      
           if(reason !=null)
           {
           this.P_array[index].status=val;
           this.service.editstatus(id,this.P_array[index]).subscribe((res)=>{
           console.log(res);
           
   })
}
      }
}
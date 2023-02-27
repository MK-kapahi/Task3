import {Component, OnChanges, OnInit} from '@angular/core'
import { Observable } from 'rxjs';
import { DisplayComponent } from '../Display/display.component';
import { Milestoneservice } from '../Service/milestone.service';

@Component
({
   selector :'app-milestone',
   templateUrl :'./milestone.component.html',
   styleUrls : ['./milestone.component.css']
})

export class MilestoneComponent implements OnInit
{

   M_array :any=[];
   constructor(private service : Milestoneservice, private dis :DisplayComponent){}
   ngOnInit(): void {
      this.service.getpost().subscribe(
         (response)=>
      {
       this.M_array = response;

      }
      )
   alert(JSON.stringify(this.M_array))
   console.log(this.M_array);
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
   this.M_array[index].status=val;
   this.service.editstatus(id,this.M_array[index]).subscribe((res)=>{
      console.log(res);
   })
}
  }

}   
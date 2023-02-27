import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './Display/display.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { ProjectComponent } from './Project/project.component';
import { TaskComponent } from './Task/task.component';

const routes: Routes = 
[
  {path :'',component :DisplayComponent},
  {path :'Milestone' ,component : MilestoneComponent},
  {path :'Project' ,component : ProjectComponent},
  {path :'Task' ,component : TaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

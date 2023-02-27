import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './Display/display.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './Project/project.component';
import { Milestoneservice } from './Service/milestone.service';
import { ProjectService } from './Service/project.service';
import { Taskservice } from './Service/task.service';
import { TaskComponent } from './Task/task.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    MilestoneComponent,
    NavbarComponent,
    ProjectComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Milestoneservice,Taskservice,ProjectService,DisplayComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http'
import { CoursesWithJsonComponent } from './coursesJson/coursesjson.component';
import { CourseService } from './course.service';
const appRoutes:Routes=[
  {path:'app',component:AppComponent},
  {path:'courses',component:CoursesComponent},
  {path:'coursesWithJSON',component:CoursesWithJsonComponent,}
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesWithJsonComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

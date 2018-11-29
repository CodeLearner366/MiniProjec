import { Component, OnInit } from '@angular/core';
import { Courses } from '../courses';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  cDuration:any;
  myForm:FormGroup;
  courseArray:Courses[]=[];
  flag1:boolean=true;
  flag:boolean=true;
  constructor(private fb:FormBuilder, private courseservice:CourseService) {
    this.myForm = this.fb.group({
      courseName:['',Validators.required],
      courseDuration:['',Validators.required]
    })
  }
    
  ngOnInit() {
    this.courseservice.getCourse().subscribe((result:Courses[])=>this.courseArray=result);
  }
 
  AddCourse()
  {
    if(this.myForm.valid)
    {
     
      this.courseservice.addCourse(this.myForm.value);
      this.courseservice.getCourse().subscribe(result=>this.courseArray=result);
      this.myForm.reset(); 
      this.flag1=true;
    }
    else
    {
      
      this.flag1 = false;
    }
     
  }

  getDuration(courseName:String)
  {
   this.cDuration="THE COURSE IS INVALID";
   this.flag=true;
      if(courseName)
      {
        this.courseArray.forEach(course =>{
          if((course.courseName).toLowerCase() == courseName.toLowerCase())
          {
            this.flag=true;
            this.cDuration = "THE COURSE DURATION IS  "+course.courseDuration+"  DAYS";
          }
      
        })
      }
      else
      {
          alert("Enter valid CourseName to get Duration");
          this.flag=false
      }
  }
}
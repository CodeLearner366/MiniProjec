import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-courses-with-json',
  templateUrl: './coursesjson.component.html',
  styleUrls: ['./coursesjson.component.css'],
  providers:[CourseService]
})
export class CoursesWithJsonComponent implements OnInit {
  jsonData:any[];
  constructor(private courseservice:CourseService) { }

  ngOnInit() {
    this.courseservice.getCourseData().subscribe((x:any[])=>this.jsonData=x)
  }

}

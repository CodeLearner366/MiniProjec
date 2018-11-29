import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Courses } from './courses';
import 'rxjs/add/observable/of';
@Injectable()
export class CourseService {
courseArr:Courses[];
cArray:Courses[]=[];
  constructor(private http:HttpClient) { }
 
  getCourseData():Observable<any>{
    return  this.http.get("./assets/courses.json")
  }

  addCourse(e:Courses)
  {
    console.log(e);
    this.cArray.push(e);
  }
  getCourse():Observable<Courses[]>
  {
    return Observable.of(this.cArray);
  }
}

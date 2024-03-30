import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesList } from 'src/app/operations-module/course-structure-mapping/models/courses-list.enum';
import { BUTTON_NAME_MAP } from 'src/app/operations-module/course-structure-mapping/models/button-name.map';
@Component({
  selector: 'app-group-header',
  templateUrl: './group-header.component.html',
  styleUrls: ['./group-header.component.scss']
})
export class GroupHeaderComponent implements OnInit {
  isExpanded = false;
  coursesList:string[]=[];
  courseNames:string[] = [BUTTON_NAME_MAP[CoursesList.FreeVersion]];
  enumCourseList:string[] = Object.values(CoursesList);
  selectedCourse:string = '';
  @Output() loadChaptersEvent: EventEmitter<string> = new EventEmitter();
  ngOnInit() {
    this.courseNames = this.getRegisteredCourseNames([
      "java",
      "my_sql",
      "hibernate",
      "web_development",
      "low_level_design",
      "spring_boot",
      "python",
      "react",
      "angular",
      "free_version",
      "java_script",
      "ds_algo",
      "git"
    ]);
  }
  getRegisteredCourseNames(list:string[]):string[]{
    let mylist:string[] = [];
    list.forEach(element => {
      this.enumCourseList.forEach(ele => {
        if(ele.toLocaleLowerCase()==(element.toLowerCase())){
          mylist.push(BUTTON_NAME_MAP[ele]);
        }
      });
    });
    return [...new Set(mylist)];
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  collapse() {
    this.isExpanded = false;
  }
  onSelectChange(courseSelectedEvent:any){
    if(courseSelectedEvent.target.value != "" && courseSelectedEvent.target.value != null){
      this.loadChapters(courseSelectedEvent.target.value);
    }
  }
  loadChapters(selectedCourse: any){
    this.selectedCourse = selectedCourse;
    this.loadChaptersEvent.emit(this.selectedCourse);
  }
}

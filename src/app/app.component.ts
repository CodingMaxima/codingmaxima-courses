import { Component,Injector } from '@angular/core';
import {  Router } from '@angular/router';
import { COURSES_MAP } from './operations-module/course-structure-mapping/models/courses.map-data';
import { ICourse } from './operations-module/course-structure-mapping/models/course.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chapters: any[] = [];
  lessons: any[] = [];

  toggleSideBar:boolean = false;
  showToggleButton:boolean = false;

  selectedCourse:string = "";
  selectedChapter: string = "";
  selectedLesson: string = "";
  
  service: ICourse|null = null;
  constructor( private injector: Injector,
               private router: Router,
             )
    {

  }
  
  
  ngOnInit() { }

  public loadChapters(course: string) {
    if(course=='Select'){
      this.showToggleButton = false;
      this.selectedCourse = '';
      this.chapters = [];
      this.lessons = [];
      if(!this.toggleSideBar){
        this.toggleSideBar = true;
      }
    }else{
      this.showToggleButton = true;
        if(this.toggleSideBar){
          this.toggleSideBar = false;
        }
        this.selectedCourse = course;
        let injectable  = COURSES_MAP[course]; // based on course name we are getting injecting required Class here
        this.service = this.injector.get(injectable);
        this.chapters = this.service?.loadChapters();
        this.loadLessonNames(this.chapters[0]);
    }
  }

  public loadLessonNames(chapter: any) {
    this.selectedChapter = chapter.name;
    this.lessons = chapter.lessons;
    if (this.lessons.length > 0) {
      this.loadLesson(this.lessons[0])
    } else {
      this.router.navigate(['/default-data']);
    }
  }

  public loadLesson(lesson: any) {
    this.selectedLesson = lesson.name;
    if(lesson.url == null || lesson.url == undefined || lesson.url == ""){
      this.router.navigate(['/default-data']);
    }else{
      this.router.navigate([lesson.url]);
    }
  }

  onToggleSideBar(){
    this.toggleSideBar = !this.toggleSideBar;
  }
}

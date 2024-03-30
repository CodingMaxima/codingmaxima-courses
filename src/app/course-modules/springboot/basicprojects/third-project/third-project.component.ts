import { Component } from '@angular/core';

@Component({
  selector: 'app-third-project',
  templateUrl: './third-project.component.html',
  styleUrls: ['./third-project.component.scss']
})
export class ThirdProjectComponent {

  
  elementId:string;
  elementId2:string;
  constructor() { 
    this.elementId = "one";
    this.elementId2 = "pojo";
   }

  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  subTabChange(event:Event){
    this.elementId2 = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number){
  
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }
}

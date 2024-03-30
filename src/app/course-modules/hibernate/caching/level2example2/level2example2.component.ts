import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level2example2',
  templateUrl: './level2example2.component.html',
  styleUrls: ['./level2example2.component.scss']
})
export class Level2example2Component implements OnInit {

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

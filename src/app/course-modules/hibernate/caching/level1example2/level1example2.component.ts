import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1example2',
  templateUrl: './level1example2.component.html',
  styleUrls: ['./level1example2.component.scss']
})
export class Level1example2Component implements OnInit {

  elementId:string;
  elementId2:string;
  constructor() { 
    this.elementId = "one";
    this.elementId2 = "pojo";
   }
   ngOnInit(): void {
  }

  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  subTabChange(event:Event){
    this.elementId2 = (event.target as Element).id;
  }

  

  setVideoSpeed(speed: number){
  
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }
}

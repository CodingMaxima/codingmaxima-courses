import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otmexample1',
  templateUrl: './otmexample1.component.html',
  styleUrls: ['./otmexample1.component.scss']
})
export class Otmexample1Component implements OnInit {

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otmexample2',
  templateUrl: './otmexample2.component.html',
  styleUrls: ['./otmexample2.component.scss']
})
export class Otmexample2Component implements OnInit {

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

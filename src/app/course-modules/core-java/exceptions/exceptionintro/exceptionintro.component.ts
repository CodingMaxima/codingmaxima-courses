import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exceptionintro',
  templateUrl: './exceptionintro.component.html',
  styleUrls: ['./exceptionintro.component.scss']
})
export class ExceptionintroComponent implements OnInit {
  elementId:string;
  elementId2:string;
  constructor() { 
    this.elementId = "one";
    this.elementId2 = "exceptionhandling"; 
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

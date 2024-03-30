import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-exceptions',
  templateUrl: './free-exceptions.component.html',
  styleUrls: ['./free-exceptions.component.scss']
})
export class FreeExceptionsComponent implements OnInit {

  elementId:string;
  elementId2:string;
  constructor() { 
    this.elementId = "one";
    this.elementId2 = "Exceptionhandling"; 
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

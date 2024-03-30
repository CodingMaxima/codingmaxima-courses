import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intoduction',
  templateUrl: './intoduction.component.html',
  styleUrls: ['./intoduction.component.css']
})
export class IntoductionComponent implements OnInit {

  elementId:string;
  constructor() {
     this.elementId = "one"; 
    }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
  setVideoSpeed(speed: number){
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}

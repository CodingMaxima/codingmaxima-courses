import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pattren16',
  templateUrl: './pattren16.component.html',
  styleUrls: ['./pattren16.component.scss']
})
export class Pattren16Component implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
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

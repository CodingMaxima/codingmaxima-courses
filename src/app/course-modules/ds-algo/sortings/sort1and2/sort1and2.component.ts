import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort1and2',
  templateUrl: './sort1and2.component.html', 
  styleUrls: ['./sort1and2.component.scss'] 
})
export class Sort1and2Component implements OnInit {
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

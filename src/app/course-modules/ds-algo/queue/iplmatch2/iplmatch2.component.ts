import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iplmatch2',
  templateUrl: './iplmatch2.component.html', 
  styleUrls: ['./iplmatch2.component.scss'] 
})
export class Iplmatch2Component implements OnInit {
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

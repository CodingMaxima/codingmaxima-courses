import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigating-program',
  templateUrl: './navigating-program.component.html',
  styleUrls: ['./navigating-program.component.scss']
})
export class NavigatingProgramComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queuetostack',
  templateUrl: './queuetostack.component.html', 
  styleUrls: ['./queuetostack.component.scss'] 
})
export class QueuetostackComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priorityqueue',
  templateUrl: './priorityqueue.component.html', 
  styleUrls: ['./priorityqueue.component.scss'] 
})
export class PriorityqueueComponent implements OnInit {
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

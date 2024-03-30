import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queuetwostack',
  templateUrl: './queuetwostack.component.html', 
  styleUrls: ['./queuetwostack.component.scss'] 
})
export class QueuetwostackComponent implements OnInit {
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

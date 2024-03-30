import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cross-comp-communication',
  templateUrl: './cross-comp-communication.component.html',
  styleUrls: ['./cross-comp-communication.component.scss']
})
export class CrossCompCommunicationComponent implements OnInit {

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

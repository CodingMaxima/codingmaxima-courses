import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trimorphic-number',
  templateUrl: './trimorphic-number.component.html',
  styleUrls: ['./trimorphic-number.component.scss']
})
export class TrimorphicNumberComponent implements OnInit {

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

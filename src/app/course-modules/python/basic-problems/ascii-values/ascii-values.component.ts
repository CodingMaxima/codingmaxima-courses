import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ascii-values',
  templateUrl: './ascii-values.component.html',
  styleUrls: ['./ascii-values.component.scss']
})
export class AsciiValuesComponent implements OnInit {

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

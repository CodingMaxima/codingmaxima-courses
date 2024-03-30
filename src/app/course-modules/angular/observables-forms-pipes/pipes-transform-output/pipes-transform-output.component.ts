import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-transform-output',
  templateUrl: './pipes-transform-output.component.html',
  styleUrls: ['./pipes-transform-output.component.scss']
})
export class PipesTransformOutputComponent implements OnInit {

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

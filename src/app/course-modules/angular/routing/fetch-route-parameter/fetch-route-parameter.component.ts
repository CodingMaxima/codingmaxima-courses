import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-route-parameter',
  templateUrl: './fetch-route-parameter.component.html',
  styleUrls: ['./fetch-route-parameter.component.scss']
})
export class FetchRouteParameterComponent implements OnInit {

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

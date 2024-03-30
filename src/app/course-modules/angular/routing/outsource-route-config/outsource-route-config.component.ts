import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outsource-route-config',
  templateUrl: './outsource-route-config.component.html',
  styleUrls: ['./outsource-route-config.component.scss']
})
export class OutsourceRouteConfigComponent implements OnInit {
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

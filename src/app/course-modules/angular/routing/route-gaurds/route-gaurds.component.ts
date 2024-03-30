import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-gaurds',
  templateUrl: './route-gaurds.component.html',
  styleUrls: ['./route-gaurds.component.scss']
})
export class RouteGaurdsComponent implements OnInit {
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

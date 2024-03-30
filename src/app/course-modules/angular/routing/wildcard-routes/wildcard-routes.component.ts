import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wildcard-routes',
  templateUrl: './wildcard-routes.component.html',
  styleUrls: ['./wildcard-routes.component.scss']
})
export class WildcardRoutesComponent implements OnInit {

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

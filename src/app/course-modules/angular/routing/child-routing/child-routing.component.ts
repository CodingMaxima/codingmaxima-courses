import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-routing',
  templateUrl: './child-routing.component.html',
  styleUrls: ['./child-routing.component.scss']
})
export class ChildRoutingComponent implements OnInit {

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

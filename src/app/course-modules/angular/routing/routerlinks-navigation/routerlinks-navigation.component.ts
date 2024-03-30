import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routerlinks-navigation',
  templateUrl: './routerlinks-navigation.component.html',
  styleUrls: ['./routerlinks-navigation.component.scss']
})
export class RouterlinksNavigationComponent implements OnInit {

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

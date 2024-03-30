import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-error-handling',
  templateUrl: './header-error-handling.component.html',
  styleUrls: ['./header-error-handling.component.scss']
})
export class HeaderErrorHandlingComponent implements OnInit {

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

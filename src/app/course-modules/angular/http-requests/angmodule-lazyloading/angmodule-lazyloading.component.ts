import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angmodule-lazyloading',
  templateUrl: './angmodule-lazyloading.component.html',
  styleUrls: ['./angmodule-lazyloading.component.scss']
})
export class AngmoduleLazyloadingComponent implements OnInit {

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

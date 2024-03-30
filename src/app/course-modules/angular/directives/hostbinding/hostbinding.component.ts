import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostbinding',
  templateUrl: './hostbinding.component.html',
  styleUrls: ['./hostbinding.component.scss']
})
export class HostbindingComponent implements OnInit {

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

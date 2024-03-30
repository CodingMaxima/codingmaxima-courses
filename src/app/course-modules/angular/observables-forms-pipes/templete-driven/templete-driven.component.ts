import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete-driven',
  templateUrl: './templete-driven.component.html',
  styleUrls: ['./templete-driven.component.scss']
})
export class TempleteDrivenComponent implements OnInit {

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

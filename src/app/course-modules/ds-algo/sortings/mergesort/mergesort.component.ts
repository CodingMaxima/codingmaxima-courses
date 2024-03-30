import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mergesort',
  templateUrl: './mergesort.component.html', 
  styleUrls: ['./mergesort.component.scss'] 
})
export class MergesortComponent implements OnInit {
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

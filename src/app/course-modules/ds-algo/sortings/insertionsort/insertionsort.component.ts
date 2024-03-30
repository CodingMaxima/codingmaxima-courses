import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertionsort',
  templateUrl: './insertionsort.component.html', 
  styleUrls: ['./insertionsort.component.scss'] 
})
export class InsertionsortComponent implements OnInit {
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

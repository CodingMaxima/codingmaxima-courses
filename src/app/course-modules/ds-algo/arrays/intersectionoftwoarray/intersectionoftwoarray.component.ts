import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intersectionoftwoarray',
  templateUrl: './intersectionoftwoarray.component.html', 
  styleUrls: ['./intersectionoftwoarray.component.scss'] 
})
export class IntersectionoftwoarrayComponent implements OnInit {
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

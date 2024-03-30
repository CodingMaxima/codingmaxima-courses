import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ncr',
  templateUrl: './ncr.component.html', 
  styleUrls: ['./ncr.component.scss'] 
})
export class NcrComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nextgreater',
  templateUrl: './nextgreater.component.html', 
  styleUrls: ['./nextgreater.component.scss'] 
})
export class NextgreaterComponent implements OnInit {
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

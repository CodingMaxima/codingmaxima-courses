import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revnumbermethod',
  templateUrl: './revnumbermethod.component.html',
  styleUrls: ['./revnumbermethod.component.scss']
})
export class RevnumbermethodComponent implements OnInit {

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

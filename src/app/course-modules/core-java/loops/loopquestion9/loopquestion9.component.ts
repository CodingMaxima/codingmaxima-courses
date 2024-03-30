import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-loopquestion9',
  templateUrl: './loopquestion9.component.html',
  styleUrls: ['./loopquestion9.component.scss']
})
export class Loopquestion9Component implements OnInit{
  elementId:string;
  constructor() {
    this.elementId = "one"; 
  }
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

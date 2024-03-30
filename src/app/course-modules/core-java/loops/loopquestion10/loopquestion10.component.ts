import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-loopquestion10',
  templateUrl: './loopquestion10.component.html',
  styleUrls: ['./loopquestion10.component.scss']
})
export class Loopquestion10Component implements OnInit{
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

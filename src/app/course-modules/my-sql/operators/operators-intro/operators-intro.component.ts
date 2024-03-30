import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators-intro',
  templateUrl: './operators-intro.component.html',
  styleUrls: ['./operators-intro.component.scss']
})
export class OperatorsIntroComponent implements OnInit {

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

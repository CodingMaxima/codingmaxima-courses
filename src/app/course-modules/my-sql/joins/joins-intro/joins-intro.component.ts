import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joins-intro',
  templateUrl: './joins-intro.component.html',
  styleUrls: ['./joins-intro.component.scss']
})
export class JoinsIntroComponent implements OnInit {

  
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

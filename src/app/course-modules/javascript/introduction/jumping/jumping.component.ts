import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumping',
  templateUrl: './jumping.component.html',
  styleUrls: ['./jumping.component.scss']
})
export class JumpingComponent implements OnInit {
  elementId: string;
  elementId2: string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "introduction";
  }
 mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
    this.elementId2 = "introduction";
  }
  tabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }


  ngOnInit(): void {
  }

  setVideoSpeed(speed: number){
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}

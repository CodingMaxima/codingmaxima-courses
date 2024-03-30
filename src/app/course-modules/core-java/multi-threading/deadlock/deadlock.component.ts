import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deadlock',
  templateUrl: './deadlock.component.html',
  styleUrls: ['./deadlock.component.scss']
})
export class DeadlockComponent implements OnInit {

  
  
  elementId: string;

  constructor() {
    this.elementId = "one";
   
  }
  ngOnInit(): void {
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  setVideoSpeed(speed: number) {

    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }

}

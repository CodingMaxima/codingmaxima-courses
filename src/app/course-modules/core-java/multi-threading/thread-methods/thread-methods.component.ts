import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread-methods',
  templateUrl: './thread-methods.component.html',
  styleUrls: ['./thread-methods.component.scss']
})
export class ThreadMethodsComponent implements OnInit {

  elementId: string;
  constructor() {
    this.elementId = "one";
  }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }


}

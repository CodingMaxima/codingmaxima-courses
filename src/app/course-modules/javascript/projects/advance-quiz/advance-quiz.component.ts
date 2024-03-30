import { Component } from '@angular/core';

@Component({
  selector: 'app-advance-quiz',
  templateUrl: './advance-quiz.component.html',
  styleUrls: ['./advance-quiz.component.scss']
})
export class AdvanceQuizComponent {
  elementId: string;
  
  constructor() {
    this.elementId = 'one';
  }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {}

  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}

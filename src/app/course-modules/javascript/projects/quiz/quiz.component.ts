import { Component } from '@angular/core';
import { MediaJavaScriptMapData } from '../../media-map-data';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaJavaScriptMapData) {
    this.elementId = 'one';
    this.audioData = mediamap.mediaData.Functions.Projects.Random_Quiz.audio;
    this.videoData = mediamap.mediaData.Functions.Projects.Random_Quiz.video;
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

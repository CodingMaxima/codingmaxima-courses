import { Component } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.OOps.student.audio;
     this.videoData = mediamap.mediaData.OOps.student.video;
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

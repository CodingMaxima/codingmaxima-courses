import { Component } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-py-student-class',
  templateUrl: './free-py-student-class.component.html',
  styleUrls: ['./free-py-student-class.component.scss']
})
export class FreePyStudentClassComponent {

  elementId: string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Free_Python.Student_Class.audio;
     this.videoData = mediamap.mediaData.Free_Python.Student_Class.video;
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

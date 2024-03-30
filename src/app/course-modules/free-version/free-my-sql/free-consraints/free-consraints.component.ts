import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-consraints',
  templateUrl: './free-consraints.component.html',
  styleUrls: ['./free-consraints.component.scss']
})
export class FreeConsraintsComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  elementId: string;
  audioData:any;
  videoData:any;

  constructor(mediaDatamysql: MediaFreeVersionMapData) {
    this.elementId = "one";
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
    this.audioData = mediaDatamysql.mediaData.Free_MY_sql.Constraints.audio;
    this.videoData = mediaDatamysql.mediaData.Free_MY_sql.Constraints.video;
  }

  ngOnInit(): void {
  }

  answer() {

    if (this.buttonValue == "Show Answer") {
      this.buttonValue = "Hide Answer";
      this.toggleOn = true;
    } else {
      this.buttonValue = "Show Answer";
      this.toggleOn = false;
    }
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }

  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}

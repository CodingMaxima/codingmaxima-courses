import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})
export class UpdatestudentComponent implements OnInit {
  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
elementId: string;
elementId2:string;
audioData:any;
videoData:any;

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
  }

  mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  constructor(mediamap:MediaMySqlMapData) {
    this.elementId2= "one";
    this.elementId = "question1";
    this.audioData = mediamap.mediaData.Update_Delete.Update_Student.audio;
    this.videoData = mediamap.mediaData.Update_Delete.Update_Student.video;
   }

  ngOnInit(): void {
  }

  answerChange() {

    if (this.buttonValue == "Show Answer") {
      this.buttonValue = "Hide Answer";
      this.toggleOn = true;
    } else {
      this.buttonValue = "Show Answer";
      this.toggleOn = false;
    }
  }
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}

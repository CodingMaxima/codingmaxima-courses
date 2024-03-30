import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-alter-student',
  templateUrl: './alter-student.component.html',
  styleUrls: ['./alter-student.component.scss']
})
export class AlterStudentComponent implements OnInit {
  elementId:string;
  elementId2:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaMySqlMapData) { 
    this.elementId = "add column";
    this.elementId2 = "one";
    this.audioData = mediamap.mediaData.Alter_Drop.Alter_Student.audio;
    this.videoData = mediamap.mediaData.Alter_Drop.Alter_Student.video;
  }

  ngOnInit(): void {
  }

  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  mainTab(event:Event){
    this.elementId2 = (event.target as Element).id;
  }
  setVideoSpeed(speed: number){
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}

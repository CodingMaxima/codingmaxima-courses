import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.scss']
})
export class InsertStudentComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaMySqlMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Insert_Query.Insert_Student.audio;
     this.videoData = mediamap.mediaData.Insert_Query.Insert_Student.video;
    }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
  setVideoSpeed(speed: number){
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }

}

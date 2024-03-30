import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-alter-employee',
  templateUrl: './alter-employee.component.html',
  styleUrls: ['./alter-employee.component.scss']
})
export class AlterEmployeeComponent implements OnInit {
  elementId:string;
  elementId2:string;
  audioData:any;
  videoData:any;
  
  constructor(mediamap:MediaMySqlMapData) { 
    this.elementId = "add column";
    this.elementId2 = "one";
    this.audioData = mediamap.mediaData.Alter_Drop.Alter_Employee.audio;
    this.videoData = mediamap.mediaData.Alter_Drop.Alter_Employee.video;
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

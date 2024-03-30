import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-employeedesgnation',
  templateUrl: './employeedesgnation.component.html',
  styleUrls: ['./employeedesgnation.component.scss']
})
export class EmployeedesgnationComponent implements OnInit {
  
  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Classes_Relations.Employee_Designation.audio;
     this.videoData = mediamap.mediaData.Classes_Relations.Employee_Designation.video;
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

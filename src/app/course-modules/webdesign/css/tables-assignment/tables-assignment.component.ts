import { Component, OnInit } from '@angular/core';
import { MediaWebDevelopmentMapData } from '../../media-map-data';

@Component({
  selector: 'app-tables-assignment',
  templateUrl: './tables-assignment.component.html',
  styleUrls: ['./tables-assignment.component.scss']
})
export class TablesAssignmentComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediadata:MediaWebDevelopmentMapData) {
    this.elementId ="one";
    this.audioData = mediadata.mediaData.CSS_Introduction.CSS_Tables.audio;
    this.videoData = mediadata.mediaData.CSS_Introduction.CSS_Tables.video;
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

import { Component, OnInit } from '@angular/core';
import { MediaWebDevelopmentMapData } from '../../media-map-data';

@Component({
  selector: 'app-forms-two',
  templateUrl: './forms-two.component.html',
  styleUrls: ['./forms-two.component.scss']
})
export class FormsTwoComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamapdata:MediaWebDevelopmentMapData) {
    this.elementId ="one";
    this.audioData = mediamapdata.mediaData.HTML_Forms.Form_2.audio;
    this.videoData = mediamapdata.mediaData.HTML_Forms.Form_2.video;
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

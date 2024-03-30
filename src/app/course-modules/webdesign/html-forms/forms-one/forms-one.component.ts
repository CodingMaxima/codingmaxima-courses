import { Component, OnInit } from '@angular/core';
import { MediaWebDevelopmentMapData } from '../../media-map-data';

@Component({
  selector: 'app-forms-one',
  templateUrl: './forms-one.component.html',
  styleUrls: ['./forms-one.component.scss']
})
export class FormsOneComponent implements OnInit {
  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediadata:MediaWebDevelopmentMapData) {
    this.elementId ="one";
    this.audioData = mediadata.mediaData.HTML_Forms.Form_1.audio;
    this.videoData = mediadata.mediaData.HTML_Forms.Form_1.video;
    
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

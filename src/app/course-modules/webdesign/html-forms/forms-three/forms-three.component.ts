import { Component, OnInit } from '@angular/core';
import { MediaWebDevelopmentMapData } from '../../media-map-data';

@Component({
  selector: 'app-forms-three',
  templateUrl: './forms-three.component.html',
  styleUrls: ['./forms-three.component.scss']
})
export class FormsThreeComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediadata:MediaWebDevelopmentMapData) {
    this.elementId ="one";
    this.audioData = mediadata.mediaData.HTML_Forms.Form_3.audio;
    this.videoData = mediadata.mediaData.HTML_Forms.Form_3.video;
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

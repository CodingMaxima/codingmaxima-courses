import { Component, OnInit } from '@angular/core';
import { MediaWebDevelopmentMapData } from '../../media-map-data';

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.scss']
})
export class AssignmentOneComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediadata:MediaWebDevelopmentMapData) {
    this.elementId ="one";
    this.audioData = mediadata.mediaData.Bootstrap_Cards.Cards_Assignment1.audio;
    this.videoData = mediadata.mediaData.Bootstrap_Cards.Cards_Assignment1.video;
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

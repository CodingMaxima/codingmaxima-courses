import { Component, OnInit } from '@angular/core';
import { MediaWebDevelopmentMapData } from '../../media-map-data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  elementId: string;
  audioData:any;
  videoData:any;

  constructor(mediadata:MediaWebDevelopmentMapData) {
    this.elementId = "one";
    this.audioData = mediadata.mediaData.Bootstrap_Cards.Cards.audio;
    this.videoData = mediadata.mediaData.Bootstrap_Cards.Cards.video;
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
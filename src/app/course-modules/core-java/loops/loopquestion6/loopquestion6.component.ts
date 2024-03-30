import { Component,OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';


@Component({
  selector: 'app-loopquestion6',
  templateUrl: './loopquestion6.component.html',
  styleUrls: ['./loopquestion6.component.scss']
})
export class Loopquestion6Component implements OnInit{
  elementId: string;
  audioData: any;
  videoData: any;
  constructor(mediaDataJava: MediaCoreJavaMapData) {
    this.elementId = 'one';
    this.audioData = mediaDataJava.mediaData.Basic_Problems.even_or_odd.audio;
    this.videoData = mediaDataJava.mediaData.Basic_Problems.even_or_odd.video;
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

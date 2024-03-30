import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.scss']
})
export class EvenOddComponent implements OnInit {
  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaCoreJavaMapData) {
     this.elementId = "one"; 
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

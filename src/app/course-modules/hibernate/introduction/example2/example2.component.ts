import { Component, OnInit } from '@angular/core';
import { MediaHibernateMapData } from '../../media-map-data';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

  elementId:string;
  elementId2:string;
  audioData:any;
  videoData:any;

  constructor(mediadata:MediaHibernateMapData) { 
    this.elementId = "one";
    this.elementId2 = "pojo";
    this.audioData = mediadata.mediaData.Introduction.Example_2.audio;
    this.videoData = mediadata.mediaData.Introduction.Example_2.video;
   }

  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  subTabChange(event:Event){
    this.elementId2 = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number){
  
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }
}
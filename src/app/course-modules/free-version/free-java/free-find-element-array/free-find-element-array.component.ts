import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-find-element-array',
  templateUrl: './free-find-element-array.component.html',
  styleUrls: ['./free-find-element-array.component.scss']
})
export class FreeFindElementArrayComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDataJava: MediaFreeVersionMapData) { 
    this.elementId = "one";
    this.audioData = mediaDataJava.mediaData.Free_Java.Find_Element.audio;
    this.videoData = mediaDataJava.mediaData.Free_Java.Find_Element.video;
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

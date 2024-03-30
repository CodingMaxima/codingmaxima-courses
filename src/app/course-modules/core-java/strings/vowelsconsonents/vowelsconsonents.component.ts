import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-vowelsconsonents',
  templateUrl: './vowelsconsonents.component.html',
  styleUrls: ['./vowelsconsonents.component.scss']
})
export class VowelsconsonentsComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one";
     this.audioData = mediamap.mediaData.Strings.Vowels_and_Consonents_Count.audio;
     this.videoData = mediamap.mediaData.Strings.Vowels_and_Consonents_Count.video; 
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

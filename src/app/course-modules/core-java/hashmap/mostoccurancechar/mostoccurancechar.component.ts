import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-mostoccurancechar',
  templateUrl: './mostoccurancechar.component.html',
  styleUrls: ['./mostoccurancechar.component.scss']
})
export class MostoccurancecharComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Hashmap.Most_Occurrence_Character.audio;
     this.videoData = mediamap.mediaData.Hashmap.Most_Occurrence_Character.video;
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

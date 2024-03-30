import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-insert',
  templateUrl: './free-insert.component.html',
  styleUrls: ['./free-insert.component.scss']
})
export class FreeInsertComponent implements OnInit {
  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDatamysql: MediaFreeVersionMapData) {
    this.elementId = "one"; 
    this.audioData = mediaDatamysql.mediaData.Free_MY_sql.Insert_Query.audio;
    this.videoData = mediaDatamysql.mediaData.Free_MY_sql.Insert_Query.video;
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

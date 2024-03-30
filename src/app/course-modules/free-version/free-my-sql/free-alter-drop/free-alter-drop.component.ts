import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-alter-drop',
  templateUrl: './free-alter-drop.component.html',
  styleUrls: ['./free-alter-drop.component.scss']
})
export class FreeAlterDropComponent implements OnInit {

  elementId:string;
  elementId2:string;
  elementId3:string;
  audioData:any;
  videoData:any;
  audioData1:any;
  videoData1:any;
  
  constructor(mediaDatamysql: MediaFreeVersionMapData) { 
    this.elementId = "alter";
    this.elementId2 = "one";
    this.elementId3 = "add column"
    this.audioData = mediaDatamysql.mediaData.Free_MY_sql.Alter_Drop.Alter.audio;
    this.videoData = mediaDatamysql.mediaData.Free_MY_sql.Alter_Drop.Alter.video;
    this.audioData1 = mediaDatamysql.mediaData.Free_MY_sql.Alter_Drop.Drop.audio;
    this.videoData1 = mediaDatamysql.mediaData.Free_MY_sql.Alter_Drop.Drop.video;
  }

  ngOnInit(): void {
  }

  mainTab(event:Event){
    this.elementId = (event.target as Element).id;
  }
  mainTabSub(event:Event){
    this.elementId2 = (event.target as Element).id;
  }
  
  tabChange(event:Event){
    this.elementId3 = (event.target as Element).id;
  }

  setVideoSpeed(speed: number){
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }


}

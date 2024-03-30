import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-create-table',
  templateUrl: './free-create-table.component.html',
  styleUrls: ['./free-create-table.component.scss']
})
export class FreeCreateTableComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediaDatamysql: MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediaDatamysql.mediaData.Free_MY_sql.Create_Table.audio;
     this.videoData = mediaDatamysql.mediaData.Free_MY_sql.Create_Table.video;
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

import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-drop-example',
  templateUrl: './drop-example.component.html',
  styleUrls: ['./drop-example.component.scss']
})
export class DropExampleComponent implements OnInit {
  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaMySqlMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Alter_Drop.Drop_Example.audio;
     this.videoData = mediamap.mediaData.Alter_Drop.Drop_Example.video;
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

import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-minofarray',
  templateUrl: './minofarray.component.html',
  styleUrls: ['./minofarray.component.scss']
})
export class MinofarrayComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;
  
  constructor(mediamap:MediaCoreJavaMapData) { 
    this.elementId = "one"; 
    this.audioData = mediamap.mediaData.Arrays.Min_of_Array.audio;
    this.videoData = mediamap.mediaData.Arrays.Min_of_Array.video;
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

}

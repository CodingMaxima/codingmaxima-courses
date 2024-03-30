import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  elementId:string;
  elementId2:string;
  audioData1:any;
  videoData1:any;
  audioData2:any;
  videoData2:any;
  audioData3:any;
  videoData3:any;

  constructor(mediamap:MediaCoreJavaMapData) { 
    this.elementId = "methodcalling-type1";
    this.elementId2 = "program";
    this.audioData1 = mediamap.mediaData.Methods.example.Method_calling.audio;
    this.videoData1 = mediamap.mediaData.Methods.example.Method_calling.video;
    this.audioData2 = mediamap.mediaData.Methods.example.Method_calling_with_parameters.audio;
    this.videoData2 = mediamap.mediaData.Methods.example.Method_calling_with_parameters.video;
    this.audioData3 = mediamap.mediaData.Methods.example.Method_calling_with_Return_Type.audio;
    this.videoData3 = mediamap.mediaData.Methods.example.Method_calling_with_Return_Type.video;
    

  }
  ngOnInit(): void {
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
    this.elementId2 = "program";
  }

  subTabChange(event:Event){
    this.elementId2 = (event.target as Element).id;
  }
}

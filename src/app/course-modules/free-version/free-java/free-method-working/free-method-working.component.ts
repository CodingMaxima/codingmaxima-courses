import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-method-working',
  templateUrl: './free-method-working.component.html',
  styleUrls: ['./free-method-working.component.scss']
})
export class FreeMethodWorkingComponent implements OnInit {

  elementId:string;
  elementId2:string;
  audioData1:any;
  videoData1:any;
  audioData2:any;
  videoData2:any;
  audioData3:any;
  videoData3:any;
  constructor(mediamap:MediaFreeVersionMapData) { 
    this.elementId = "methodcalling-type1";
    this.elementId2 = "program";
    this.audioData1 = mediamap.mediaData.Free_Java.Method_Working.Method_Calling.audio;
    this.videoData1 = mediamap.mediaData.Free_Java.Method_Working.Method_Calling.video;
    this.audioData2 = mediamap.mediaData.Free_Java.Method_Working.Method_Calling_Parameters.audio;
    this.videoData2 = mediamap.mediaData.Free_Java.Method_Working.Method_Calling_Parameters.video;
    this.audioData3 = mediamap.mediaData.Free_Java.Method_Working.Method_Calling_ReturnType.audio;
    this.videoData3 = mediamap.mediaData.Free_Java.Method_Working.Method_Calling_ReturnType.video;
  }
  ngOnInit(): void {
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  subTabChange(event:Event){
    this.elementId2 = (event.target as Element).id;
  }

}

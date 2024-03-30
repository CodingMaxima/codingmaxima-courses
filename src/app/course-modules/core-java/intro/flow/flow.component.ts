import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  elementId:string;
  elementId2:string;
  audioData:any;
  videoData:any;
  audioData1:any;
  videoData1:any;
  audioData2:any;
  videoData2:any;

  constructor(mediamap:MediaCoreJavaMapData) { 
    this.elementId = "for-loop";
    this.elementId2 = "intro";
    this.audioData = mediamap.mediaData.Introduction.flow_iterative_statements.for_loop.audio;
    this.videoData = mediamap.mediaData.Introduction.flow_iterative_statements.for_loop.video;
    this.audioData1 = mediamap.mediaData.Introduction.flow_iterative_statements.while_loop.audio;
    this.videoData1 = mediamap.mediaData.Introduction.flow_iterative_statements.while_loop.video;
    this.audioData2 = mediamap.mediaData.Introduction.flow_iterative_statements.do_while_loop.audio;
    this.videoData2 = mediamap.mediaData.Introduction.flow_iterative_statements.do_while_loop.video;
    }
  ngOnInit(): void {
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
    this.elementId2="intro";
  }

  subTabChange(event:Event){
    this.elementId2 = (event.target as Element).id;
  }
}


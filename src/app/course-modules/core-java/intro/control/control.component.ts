import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  elementId:string;
  elementId1:string;
  audioData:any;
  videoData:any;
  audioData1:any;
  videoData1:any;
  audioData2:any;
  videoData2:any;
  audioData3:any;
  videoData3:any;
  audioData4:any;
  videoData4:any;
  constructor(medimap:MediaCoreJavaMapData) { 
    this.elementId = "if-condition-type1";
    this.elementId1 = "if condition";
    this.audioData = medimap.mediaData.Introduction.Control_Statements.if_Condition.audio;
    this.videoData = medimap.mediaData.Introduction.Control_Statements.if_Condition.video;
    this.audioData1 = medimap.mediaData.Introduction.Control_Statements.if_else_Condition.audio;
    this.videoData1 = medimap.mediaData.Introduction.Control_Statements.if_else_Condition.video;
    this.audioData2 = medimap.mediaData.Introduction.Control_Statements.else_if_ladder.audio;
    this.videoData2 = medimap.mediaData.Introduction.Control_Statements.else_if_ladder.video;
    this.audioData3 = medimap.mediaData.Introduction.Control_Statements.switch_Condition.audio;
    this.videoData3 = medimap.mediaData.Introduction.Control_Statements.switch_Condition.video;
    this.audioData4 = medimap.mediaData.Introduction.Control_Statements.Nested_if_Condition.audio;
    this.videoData4 = medimap.mediaData.Introduction.Control_Statements.Nested_if_Condition.video;

  }
  ngOnInit(): void {
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
    this.elementId1 = "if condition";
  }

    subTabChange(event:Event){
      this.elementId1 = (event.target as Element).id;
  }
}

import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-student-aggregate',
  templateUrl: './student-aggregate.component.html',
  styleUrls: ['./student-aggregate.component.scss']
})
export class StudentAggregateComponent implements OnInit {
  toggleOn: boolean[] = [false, false,false,false,false,false];
  buttonValue: string[] = ["Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer"];
  colums: any;
 elementId:string;
 elementId2:string;
 audioData:any;
 videoData:any;
 
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
    this.toggleOn = [false,false,false,false,false,false];
    this.buttonValue = ["Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer"];
  }

  constructor(mediamap:MediaMySqlMapData) { 
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediamap.mediaData.Aggregate_Functions.Student_Aggregate.audio;
    this.videoData = mediamap.mediaData.Aggregate_Functions.Student_Aggregate.video;
  }

 
  ngOnInit(): void {
  }

  
  answerChange(index: number) {

    if (this.buttonValue[index] == "Show Answer") {
      this.buttonValue[index] = "Hide Answer";
      this.toggleOn[index] = true;
    } else {
      this.buttonValue[index] = "Show Answer";
      this.toggleOn[index] = false;
    }
  }

  
  mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;

  }

  getSplitDataHeader(data: string): string[] {
    var array = data.split(",");
    return array;
  }

  getSplitDataRows(row: string, data: string[]): string[] {
    if (row != data[0]) {
      var array = row.split(",");
      return array;
    }
    else {
      return [];
    }
  }
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }

}

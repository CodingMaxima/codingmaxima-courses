import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-student-groupby-having',
  templateUrl: './student-groupby-having.component.html',
  styleUrls: ['./student-groupby-having.component.scss']
})
export class StudentGroupbyHavingComponent implements OnInit {
  toggleOn: boolean[] = [false, false,false,false,false,false,false];
  buttonValue: string[] = ["Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer"];
  colums: any;
  elementId: string;
  elementId2:string;
  audioData:any;
  videoData:any;
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.toggleOn = [false,false,false,false,false,false,false];
    this.buttonValue =  ["Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer"];
  }

 answerOne:string[] =[
  "age,count(*)",
"17,1",
"16,2",
"34,1",
"19,2",
"22,2",
"33,3",
"40,1",
"23,2",
"25,1",
"20,1",
"26,4",
"21,1",
"43,2",
"18,1",
"35,1",
"30,2",
"24,2",
"27,1"

 ];
 answerTwo:string[] =[
  "total_marks,count(*)",
"900,1",
"600,1",
"700,2",
"650,3",
"570,1",
"850,1",
"510,1",
"490,1",
"605,1",
"930,1",
"945,1",
"770,1",
"876,1",
"64,1",
"40,1",
"980,1",
"55,1",
"769,1",
"587,2",
"90,1",
"934,1",
"625,1",
"988,1",
"768,1",
"767,1",

 ];
 answerThree:string[] =[
  "branch,count(*)",
"C.S.E,3",
"M.P.C,2",
"IT,1",
"Civil,3",
"Aeronatics,1",
"Computer Science,1",
"Msc.Maths,4",
"Bsc.Maths,1",
"M.Tech Computers,1",
"Chemistry,3",
"E.C.E,1",
"Bsc.Physics,1",
"B.com Computers,1",
"EEE,1",
"etroleum Engineer,1",
"Bi.P.C,1",
"Bsc.Chemistry,3",
"850,1"

 ];
 answerFour:string[] =[
  "current_semister,count(*)",
"6,1",
"3,8",
"5,4",
"8,1",
"4,4",
"1,4",
"7,3",
"2,5"

 ];
 answerFive:string[] =[
  "college_name,count(*)",
"Visit Engineering College,2",
"St.josh college,1",
"Andhra University,4",
"Kite Engineering College,4",
"Sri Ramulu Engineering College,3",
"Sai Degree College,5",
"Venkateswara University,1",
"Sri Vasavi Engineering College,3",
"St.John College,2",
"Adithya College,1",
"Malla Reddy Engineering College,1",
"AKRJ Engineerig College,1",
"Sasi College,1",
"AKRJ Engineering College,1"

 ];
 mainTab(event: Event) {
  this.elementId2 = (event.target as Element).id;
}
  constructor(mediamap:MediaMySqlMapData) {  
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediamap.mediaData.GroupBy_Having.Student_groupby_having.audio;
    this.videoData = mediamap.mediaData.GroupBy_Having.Student_groupby_having.video;
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

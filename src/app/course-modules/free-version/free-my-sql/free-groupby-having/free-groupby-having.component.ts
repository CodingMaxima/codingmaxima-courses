import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-groupby-having',
  templateUrl: './free-groupby-having.component.html',
  styleUrls: ['./free-groupby-having.component.scss']
})
export class FreeGroupbyHavingComponent implements OnInit {

  toggleOn: boolean[] = [false, false,false,false,false,false,false];
  buttonValue: string[] = ["Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer"];
  colums: any;
  elementId: string;
  elementId2: string;
  audioData:any;
  videoData:any;

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.toggleOn = [false,false,false,false,false,false,false];
    this.buttonValue =  ["Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer","Show Answer"];
  }
  mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
 answerOne:string[] =[
  "age,count(*)",
"24,1",
"29,3",
"40,2",
"22,5",
"30,1",
"35,1",
"28,1",
"32,2",
"38,1",
"27,1",
"37,1",
"23,2",
"33,2",
"25,1",
"36,1",
"26,2",
"31,1",
"34,1"
 ];
 answerTwo:string[] =[
  "designation,count(*)",
"Software Engineer,5",
"Web Developer,3",
"Sr.manager,3",
"bench,7",
"Team Lead,1",
"trainee,1",
"H.R,1",
"Associate Manager,2",
"Associate Engineer,1",
"Jr.Engineer,1",
"Manager,1",
"Application Developer,1",
"Sr.Developer,1",
"Web Designer,1"

 ];
 answerThree:string[] =[
  "salary,count(*)",
"20000,1",
"50000,2",
"90000,1",
"30000,3",
"55000,1",
"80000,2",
"15000,1",
"45000,2",
"5000,3",
"88000,1",
"35000,1",
"40000,1",
"95000,2",
"65000,2",
"18000,1",
"10000,1",
"8000,2",
"6000,1",
"25000,1"

 ];
 answerFour:string[] =[
  "joining_date,count(*)",
"02-05-2019,1",
"19-03-2016,2",
"27-10-2001,1",
"28-12-2022,5",
"20-09-2013,1",
"11-11-2007,1",
"01-02-2018,1",
"05-06-2010,1",
"10-10-2008,1",
"10-05-2018,1",
"02-10-2005,1",
"27-01-2005,1",
"28-02-2011,1",
"10-02-2009,1",
"18-02-2017,1",
"19-03-2006,1",
"29-12-2022,3",
"23-05-2012,1",
"2-10-2014,1",
"17-12-2012,1",
"17-12-2022,1",
"01-01-2021,1"

 ];
 answerFive:string[] =[
  "company_name,count(*)",
"Intel Technologies,4",
"Synoric Technologies,5",
"Maxima Encode,1",
"wipro,5",
"Tcs,3",
"Vsoft Technologies,1",
"Argano technologies,1",
"Infosys,1",
"Intense Technologies,2",
"Tech Manhindra,1",
"Tesla Technologies,1",
"Express Pvt ltd,1",
"Ey technologies,1",
"West Agile,1",
"Walking Tree Technologies,1"

 ];
  constructor(mediaDatamysql: MediaFreeVersionMapData) {
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediaDatamysql.mediaData.Free_MY_sql.Groupby_Having.audio;
    this.videoData = mediaDatamysql.mediaData.Free_MY_sql.Groupby_Having.video;

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

import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-update-delete',
  templateUrl: './free-update-delete.component.html',
  styleUrls: ['./free-update-delete.component.scss']
})
export class FreeUpdateDeleteComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  elementId: string;
  elementId2: string;
  elementId3:string;
  audioData:any;
  videoData:any;
  audioData1:any;
  videoData1:any;

  answerOne: string[] = [
    "id,firt_name,last_name,gender,designation,company_name,salary,age,aadharnumber,primapryphonenumber,employee_type,joining_date",
"1,Pardeep,Narwal,male,Software Engineer,Intel Technologies,20000,24,1230999884,99887766,full time,02-05-2019",
"2,Sandeep,Dull,male,Web Developer,Synoric Technologies,50000,29,1230999894,0,full time,19-03-2016",
"3,Neelima,Chowdary,female,Sr.manager,Maxima Encode,90000,40,1230999877,99886666,part time,27-10-2001",
"4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,28-12-2022",
"5,Priya,Soodh,female,Associate Manager,Tcs,55000,30,1234565432,0,part time,20-09-2013",
"6,Sai,Ruchitha,female,Sr.Manager,Vsoft Technologies,80000,35,1231231234,99876598,full time,11-11-2007",
"7,John,Robert,unknown,jr.Developer,wipro,25000,23,1234123412,99997777,full time,28-12-2022",
"9,Rishank,Devadiga,male,Associate Manager,Infosys,75000,32,1234554321,0,full time,05-06-2010",
"10,Ram,Kapoor,male,Software Engineer,Intense Technologies,88000,38,1234567231,98765478,full time,10-10-2008",
"11,Sai,Latha,female,Associate Engineer,Tech Manhindra,35000,27,1234567895,99887722,full time,10-05-2018",
"12,Thomas,Edward,unknown,Jr.Engineer,Synoric Technologies,40000,29,1230981231,0,full time,28-12-2022",
"13,Smrithi,Kour,female,Web Developer,Tesla Technologies,75000,37,1230099880,99995559,full time,02-10-2005",
"4,Mohan,Krishna,male,bench,Intel Technologies,30000,23,1234998874,99442647,full time,28-12-2022",
"15,Tony,Edward,unknown,Manager,Tcs,95000,40,1234509876,98723456,full time,27-01-2005",
"16,Swetha,Kapoor,male,Web Developer,Wipro,65000,32,1230987653,98732187,full time,28-02-2011",
"17,Usha,Sri,female,bench,Express Pvt ltd,45000,24,1289787435,99552891,full time,28-12-2022",
"18,Narender,Hoshiyar,male,Application Developer,Ey technologies,65000,33,1230099007,99123999,full time,10-02-2009",
"19,Clistofer,butt,unknown,Sr.Developer,West Agile,45000,25,1234098726,0,part time,18-02-2017",
"20,Brinda,Mehta,female,Web Designer,Walking Tree Technologies,80000,36,1230034567,98217289,full time,19-03-2006",
"21,Vamsi,Krishna,male,Software Engineer,Intel Technologies,50000,26,1230044567,98217289,part time,19-03-2016",
"22,Neethu,Chopra,female,bench,Wipro,10000,26,1234444567,92227289,full time,29-12-2022",
"23,Mahitha,Sushma,female,Software Engineer,Tcs,85000,31,1000044567,98212332,full time,23-05-2012",
"24,Anup,Kumar,male,Associate Manager,Intel Technologies,95000,34,123223347,91117289,full time,29-12-2022",
"25,Prasanth,Roy,male,bench,wipro,45000,24,1255554567,99917299,part time,29-12-2022",
"28,Karthik,Singh,male,Automation Tester,Synoric Technologies,40000,23,144399927,99999999,full time,17-12-2022",
"29,Anitha,Dull,female,bench,Tcs,45000,24,149349927,98767989,full time,01-01-2021"


  ];
  answerTwo: string[] = [
    "id,firt_name,last_name,gender,designation,company_name,salary,age,aadharnumber,primapryphonenumber,employee_type,joining_date"];

  tabChange(event: Event) {
    this.elementId3 = (event.target as Element).id;
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
  }

  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  mainSubTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  constructor(mediaDatamysql: MediaFreeVersionMapData) {
    this.elementId= "update";
    this.elementId2 = "one";
    this.elementId3 = "question1";
    this.audioData = mediaDatamysql.mediaData.Free_MY_sql.Update_Delete.Update.audio;
    this.videoData = mediaDatamysql.mediaData.Free_MY_sql.Update_Delete.Update.video;
    this.audioData1 = mediaDatamysql.mediaData.Free_MY_sql.Update_Delete.Delete.audio;
    this.videoData1 = mediaDatamysql.mediaData.Free_MY_sql.Update_Delete.Delete.video;
  }

  ngOnInit(): void {
  }
  answerChange() {

    if (this.buttonValue == "Show Answer") {
      this.buttonValue = "Hide Answer";
      this.toggleOn = true;
    } else {
      this.buttonValue = "Show Answer";
      this.toggleOn = false;
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

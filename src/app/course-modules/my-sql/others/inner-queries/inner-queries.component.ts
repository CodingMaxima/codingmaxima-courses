import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-inner-queries',
  templateUrl: './inner-queries.component.html',
  styleUrls: ['./inner-queries.component.scss']
})
export class InnerQueriesComponent implements OnInit {
  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  elementId: string;
  elementId2:string;
  audioData:any;
  videoData:any;

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
  }
  mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  answerOne: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,aadhar_number,primaryphonenumber,employee_type,joining_date",
"4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,2022-12-28",
"7,John,Robert,unknown,trainee,wipro,15000,22,1234123412,99997777,full time,2022-12-28",
"17,Usha,Sri,female,bench,Express Pvt ltd,18000,22,1289787435,99552891,full time,2022-12-28",
"25,Prasanth,Roy,male,bench,wipro,8000,22,1255554567,99917299,part time,2022-12-29",
"29,Anitha,Dull,female,bench,Tcs,30000,22,149349927,98767989,full time,2021-01-01"
  ];
  answerTwo: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,aadhar_number,primaryphonenumber,employee_type,joining_date",
"15,Tony,Edward,unknown,Manager,Tcs,95000,40,1234509876,98723456,full time,27-01-2005",
"24,Anup,Kumar,male,Associate Manager,Intel Technologies,95000,34,123223347,91117289,full time,29-12-2022"

  ]; 
  answerThree: string[] = [
    "roll_number,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
"14,Serena,Williams,female,43,876,Adithya College,B,B.com Computers,1",
"19,Tarun,Singh,male,43,769,Sri Vasavi Engineering College,C,Civil,7"


  ];
  answerFour: string[] = [
    "roll_number,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
"8,William,Morris,male,23,490,Visit Engineering College,E,Bsc.Maths,1"


  ];
  answerFive: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,aadhar_number,primaryphonenumber,employee_type,joining_date",
"4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,28-12-2022",
"14,Mohan,Krishna,male,bench,Intel Technologies,30000,23,1234998874,99442647,full time,28-12-2022",
"29,Anitha,Dull,female,bench,Tcs,30000,22,149349927,98767989,full time,01-01-2021"

  ];
 
  constructor(mediamap:MediaMySqlMapData) {
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediamap.mediaData.Others.Inner_Queries.audio;
    this.videoData = mediamap.mediaData.Others.Inner_Queries.video;
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

import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-others',
  templateUrl: './free-others.component.html',
  styleUrls: ['./free-others.component.scss']
})
export class FreeOthersComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  elementId: string;
  elementId2: string;
  elementId3: string;
  audioData:any;
  videoData:any;
  audioData1:any;
  videoData1:any;

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
    "id,first_name,last_name,gender,designation,company_name,salary,age,aadhar_number,primaryphonenumber,employee_type,joining_date",
    "4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,28-12-2022",
    "14,Mohan,Krishna,male,bench,Intel Technologies,30000,23,1234998874,99442647,full time,28-12-2022",
    "29,Anitha,Dull,female,bench,Tcs,30000,22,149349927,98767989,full time,01-01-2021"

  ];
  answerFour: string[] = [
    "id, first_name, last_name, gender, designation, company_name, salary, age, bankaccountnumber, primaryphonenumber, employee_type, joining_date",
    "8,Sri,Divya,female,H.R,Argano technologies,45000,28,1234567890,98765432,full time,2018-02-01",
    "17,Usha,Sri,female,bench,Express Pvt ltd,18000,22,1289787435,99552891,full time,2022-12-28",
    "18,Narender,Hoshiyar,male,Application Developer,Ey technologies,65000,33,1230099007,99123999,full time,2009-02-10",
    "9,Rishank,Devadiga,male,Associate Manager,Infosys,75000,32,1234554321,0,full time,2010-06-05",
    "1,Pardeep,Narwal,male,Software Engineer,Intel Technologies,20000,24,1230999884,99887766,full time,2019-05-02",
    "14,Mohan,Krishna,male,bench,Intel Technologies,30000,23,1234998874,99442647,full time,2022-12-28",
    "21,Vamsi,Krishna,male,Software Engineer,Intel Technologies,50000,26,1230044567,98217289,part time,2016-03-19",
    "24,Anup,Kumar,male,Associate Manager,Intel Technologies,95000,34,123223347,91117289,full time,2022-12-29",
    "10,Ram,Kapoor,male,Software Engineer,Intense Technologies,88000,38,1234567231,98765478,full time,2008-10-10",
    "27,Sri,Valli,female,Sr.Manager,Intense Technologies,6000,33,133399927,98882399,full time,2012-12-17",
    "3,Neelima,Chowdary,female,Sr.manager,Maxima Encode,90000,40,1230999877,99886666,part time,2001-10-27",
    "2,Sandeep,Dull,male,Web Developer,Synoric Technologies,50000,29,1230999894,0,full time,2016-03-19",
    "12,Thomas,Edward,unknown,Jr.Engineer,Synoric Technologies,40000,29,1230981231,0,full time,2022-12-28",
    "23,Mahitha,Sushma,female,Software Engineer,Synoric Technologies,75000,31,1000044567,98212332,full time,2012-05-23",
    "26,Sri,Valli,female,Software Engineer,Synoric Technologies,8000,29,122299927,99932399,full time,2014-10-12",
    "28,Karthik,Singh,male,bench,Synoric Technologies,25000,23,144399927,98882399,full time,2022-12-17",
    "5,Priya,Soodh,female,Team Lead,Tcs,55000,30,1234565432,0,part time,2013-09-20",
    "15,Tony,Edward,unknown,Manager,Tcs,95000,40,1234509876,98723456,full time,2005-01-27",
    "29,Anitha,Dull,female,bench,Tcs,30000,22,149349927,98767989,full time,2021-01-01",
    "11,Sai,Latha,female,Associate Engineer,Tech Manhindra,35000,27,1234567895,99887722,full time,2018-05-10",
    "13,Smrithi,Kour,female,Web Developer,Tesla Technologies,75000,37,1230099880,99995559,full time,2005-10-02",
    "6,Sai,Ruchitha,female,Sr.Manager,Vsoft Technologies,80000,35,1231231234,99876598,full time,2007-11-11",
    "20,Brinda,Mehta,female,Web Designer,Walking Tree Technologies,80000,36,1230034567,98217289,full time,2006-03-19",
    "19,Clistofer,butt,unknown,Sr.Developer,West Agile,45000,25,1234098726,0,part time,2017-02-18",
    "4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,2022-12-28",
    "7,John,Robert,unknown,trainee,wipro,15000,22,1234123412,99997777,full time,2022-12-28",
    "16,Swetha,Kapoor,male,Web Developer,Wipro,65000,32,1230987653,98732187,full time,2011-02-28",
    "22,Neethu,Chopra,female,bench,Wipro,10000,26,1234444567,92227289,full time,2022-12-29",
    "25,Prasanth,Roy,male,bench,wipro,8000,22,1255554567,99917299,part time,2022-12-29"


  ];
  answerFive: string[] = [
    "id,first_name,last_name,company_name,salary",
"15,Tony,Edward,Tcs,95000",
"24,Anup,Kumar,Intel Technologies,95000",
"3,Neelima,Chowdary,Maxima Encode,90000",
"10,Ram,Kapoor,Intense Technologies,88000",
"6,Sai,Ruchitha,Vsoft Technologies,80000",
"20,Brinda,Mehta,Walking Tree Technologies,80000",
"9,Rishank,Devadiga,Infosys,75000",
"13,Smrithi,Kour,Tesla Technologies,75000",
"23,Mahitha,Sushma,Synoric Technologies,75000",
"16,Swetha,Kapoor,Wipro,65000",
"18,Narender,Hoshiyar,Ey technologies,65000",
"27,Sri,Valli,Intense Technologies,60000",
"5,Priya,Soodh,Tcs,55000",
"2,Sandeep,Dull,Synoric Technologies,50000",
"21,Vamsi,Krishna,Intel Technologies,50000",
"8,Sri,Divya,Argano technologies,45000",
"19,Clistofer,butt,West Agile,45000",
"12,Thomas,Edward,Synoric Technologies,40000",
"11,Sai,Latha,Tech Manhindra,35000",
"4,Shiv,Kumar,wipro,30000",
"14,Mohan,Krishna,Intel Technologies,30000",
"29,Anitha,Dull,Tcs,30000",
"28,Karthik,Singh,Synoric Technologies,25000",
"1,Pardeep,Narwal,Intel Technologies,20000",
"17,Usha,Sri,Express Pvt ltd,18000",
"7,John,Robert,wipro,15000",
"22,Neethu,Chopra,Wipro,10000",
"25,Prasanth,Roy,wipro,8000",
"26,Sri,Valli,Synoric Technologies,8000"

  ];

  constructor(mediaDatamysql: MediaFreeVersionMapData) {
    this.elementId = "inner-queries"
    this.elementId2 = "one";
    this.elementId3 = "question1";
    this.audioData = mediaDatamysql.mediaData.Free_MY_sql.others.Inner_Queries.audio;
    this.videoData = mediaDatamysql.mediaData.Free_MY_sql.others.Inner_Queries.video;
    this.audioData1 = mediaDatamysql.mediaData.Free_MY_sql.others.Sorting.audio;
    this.videoData1 = mediaDatamysql.mediaData.Free_MY_sql.others.Sorting.video;
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

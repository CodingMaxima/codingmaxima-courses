import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

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
  answerTwo: string[] = [
    "roll_number,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
"28,Ramya,Manthri,female,23,988,AKRJ Engineering College,A,Chemistry,4",
"17,Sweety,dutt,female,18,980,Sasi College,A,Bi.P.C,1",
"11,Amritha,Rao,female,26,945,Sri Vasavi Engineering College,A,Chemistry,1",
"26,Vinod,Kumar,male,27,934,Sri Vasavi Engineering COllege,A,Msc.Maths,5",
"10,Rohit,Kumar,male,20,930,Andhra University,A,civil,7",
"1,Naveen,Kumar,male,17,900,Visit Engineering College,A,C.S.E,6",
"23,Subham,Kapoor,male,26,890,Kite Engineering College,B,Msc.Maths,2",
"14,Serena,Williams,female,43,876,Adithya College,B,B.com Computers,1",
"25,Honey,Singh,male,30,858,Andhra University,B,Chemistry,4",
"18,Pihu,Soodh,female,16,855,St.John College,B,M.P.C,2",
"6,Adhi,Mehta,male,33,850,Sai Degree College,B,Computer Science,4",
"13,Manjeeth,Chillar,male,33,770,Kite Engineering College,C,Bsc.Physics,3",
"19,Tarun,Singh,male,43,769,Sri Vasavi Engineering College,C,Civil,7",
"29,Ali,Reza,male,26,768,Sri Ramulu Engineering College,B,850,3",
"30,Srikrithi,Mehta,female,24,767,sai Degree College,B,Msc.Maths,2",
"3,Sri,Harsith,male,34,700,Andhra University,C,IT,5",
"22,Ram,Krishna,male,30,700,Andhra University,c,Bsc.Chemistry,5",
"4,Sandeep,Kishan,male,19,650,Kite Engineering College,D,Civil,3",
"12,Deepika,Singh,female,21,650,St.John College,D,E.C.E,5",
"21,Sri,Priya,female,26,650,Kite Engineering College,D,C.S.E,4",
"16,Krish,kapoor,male,19,640,AKRJ Engineerig College,D,Petroleum Engineer,2",
"27,Supriya,Kour,female,33,625,sai Degree College,D,C.S.E,2",
"9,Judias,Puneeth,male,25,605,Sri Ramulu Engineering College,D,M.Tech Computers,3",
"2,Preethi,Soodh,female,16,600,St.josh college,D,M.P.C,3",
"20,Nandini,Dyer,female,35,587,sai Degree College,D,Bsc.Chemistry,3",
"24,Hema,Sri,female,24,587,sai Degree College,c,Bsc.Chemistry,3",
"5,Krithika,Sri,female,22,570,Sri Ramulu Engineering College,E,Aeronatics,8",
"15,Rick,Grims,male,22,564,Malla Reddy Engineering College,E,EEE,7",
"7,Amelia,Dyer,female,40,510,Venkateswara University,C,Msc.Maths,3",
"8,William,Morris,male,23,490,Visit Engineering College,E,Bsc.Maths,1"
];
  answerThree: string[] = [
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
  answerFour: string[] = [
    "first_name,last_name,college_name,current_semister,total_marks",
"Preethi,Soodh,St.josh college,3,600",
"Pihu,Soodh,St.John College,2,855",
"Naveen,Kumar,Visit Engineering College,6,900",
"Sweety,dutt,Sasi College,1,980",
"Sandeep,Kishan,Kite Engineering College,3,650",
"Krish,kapoor,AKRJ Engineerig College,2,640",
"Rohit,Kumar,Andhra University,7,930",
"Deepika,Singh,St.John College,5,650",
"Krithika,Sri,Sri Ramulu Engineering College,8,570",
"Rick,Grims,Malla Reddy Engineering College,7,564",
"William,Morris,Visit Engineering College,1,490",
"Ramya,Manthri,AKRJ Engineering College,4,988",
"Hema,Sri,sai Degree College,3,587",
"Srikrithi,Mehta,sai Degree College,2,767",
"Judias,Puneeth,Sri Ramulu Engineering College,3,605",
"Amritha,Rao,Sri Vasavi Engineering College,1,945",
"Sri,Priya,Kite Engineering College,4,650",
"Subham,Kapoor,Kite Engineering College,2,890",
"Ali,Reza,Sri Ramulu Engineering College,3,768",
"Vinod,Kumar,Sri Vasavi Engineering COllege,5,934",
"Ram,Krishna,Andhra University,5,700",
"Honey,Singh,Andhra University,4,858",
"Adhi,Mehta,Sai Degree College,4,850",
"Manjeeth,Chillar,Kite Engineering College,3,770",
"Supriya,Kour,sai Degree College,2,625",
"Sri,Harsith,Andhra University,5,700",
"Nandini,Dyer,sai Degree College,3,587",
"Amelia,Dyer,Venkateswara University,3,510",
"Serena,Williams,Adithya College,1,876",
"Tarun,Singh,Sri Vasavi Engineering College,7,769"

  ];
 

  constructor(mediamap:MediaMySqlMapData) {
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediamap.mediaData.Others.Sorting.audio;
    this.videoData = mediamap.mediaData.Others.Sorting.video;
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

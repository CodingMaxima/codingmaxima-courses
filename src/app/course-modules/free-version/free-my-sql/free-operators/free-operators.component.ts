import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-operators',
  templateUrl: './free-operators.component.html',
  styleUrls: ['./free-operators.component.scss']
})
export class FreeOperatorsComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  elementId: string;
  elementId2: string;
  audioData:any;
  videoData:any;

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
  }
  answerOne: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,bankaccountnumber,primaryphonenumber,employee_type,joining_date",
    "2,Sandeep,Dull,male,Web Developer,Synoric Technologies,50000,29,1230999894,0,full time,2016-03-19",
    "4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,2022-12-28",
    "6,Sai,Ruchitha,female,Sr.Manager,Vsoft Technologies,80000,35,1231231234,99876598,full time,2007-11-11",
    "8,Sri,Divya,female,H.R,Argano technologies,45000,28,1234567890,98765432,full time,2018-02-01",
    "11,Sai,Latha,female,Associate Engineer,Tech Manhindra,35000,27,1234567895,99887722,full time,2018-05-10",
    "13,Smrithi,Kour,female,Web Developer,Tesla Technologies,75000,37,1230099880,99995559,full time,2005-10-02",
    "16,Swetha,Kapoor,male,Web Developer,Wipro,65000,32,1230987653,98732187,full time,2011-02-28",
    "26,Sri,Valli,female,Software Engineer,Synoric Technologies,8000,29,122299927,99932399,full time,2014-10-12",
    "27,Sri,Valli,female,Sr.Manager,Intense Technologies,60000,33,133399927,98882399,full time,2012-12-17"

  ];
  answerTwo: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,bankaccountnumber,primaryphonenumber,employee_typ,joining_date",
    "6,Sai,Ruchitha,female,Sr.Manager,Vsoft Technologies,80000,35,1231231234,99876598,full time,2007-11-11",
    "8,Sri,Divya,female,H.R,Argano technologies,45000,28,1234567890,98765432,full time,2018-02-01",
    "9,Rishank,Devadiga,male,Associate Manager,Infosys,75000,32,1234554321,0,full time,2010-06-05",
    "11,Sai,Latha,female,Associate Engineer,Tech Manhindra,35000,27,1234567895,99887722,full time,2018-05-10",
    "14,Mohan,Krishna,male,bench,Intel Technologies,30000,23,1234998874,99442647,full time,2022-12-28",
    "20,Brinda,Mehta,female,Web Designer,Walking Tree Technologies,80000,36,1230034567,98217289,full time,2006-03-19",
    "21,Vamsi,Krishna,male,Software Engineer,Intel Technologies,50000,26,1230044567,98217289,part time,2016-03-19",
    "22,Neethu,Chopra,female,bench,Wipro,10000,26,1234444567,92227289,full time,2022-12-29",
    "23,Mahitha,Sushma,female,Software Engineer,Synoric Technologies,75000,31,1000044567,98212332,full time,2012-05-23"

  ];
  answerThree: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,bankaccountnumber,primaryphonenumber,employee_typ,joining_date",
    "14,Mohan,Krishna,male,bench,Intel Technologies,30000,23,1234998874,99442647,full time,2022-12-28",
    "18,Narender,Hoshiyar,male,Application Developer,Ey technologies,65000,33,1230099007,99123999,full time,2009-02-10",
    "21,Vamsi,Krishna,male,Software Engineer,Intel Technologies,50000,26,1230044567,98217289,part time,2016-03-19",
    "23,Mahitha,Sushma,female,Software Engineer,Synoric Technologies,75000,31,1000044567,98212332,full time,2012-05-23"


  ];
  answerFour: string[] = [
    "id,first_name,designation,salary,company_name",
    "7,John,trainee,15000,wipro",
    "14,Mohan,bench,30000,Intel Technologies",
    "15,Tony,Manager,95000,Tcs"

  ];
  answerFive: string[] = [
    "id,first_name,last_name,designation,salary,company_name",
    "6,Sai,Ruchitha,Sr.Manager,80000,Vsoft Technologies",
    "8,Sri,Divya,H.R,45000,Argano technologies",
    "11,Sai,Latha,Associate Engineer,35000,Tech Manhindra",
    "26,Sri,Valli,Software Engineer,8000,Synoric Technologies",
    "27,Sri,Valli,Sr.Manager,6000,Intense Technologies"


  ];
  answerSix: string[] = [
    "id,first_name,last_name,gender,designaion,compay_name,salary,age,bankaccountnumber,primaryphonenumber,employee_type,joining_date",
    "4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,2022-12-28",
    "10,Ram,Kapoor,male,Software Engineer,Intense Technologies,88000,38,1234567231,98765478,full time,2008-10-10",
    "13,Smrithi,Kour,female,Web Developer,Tesla Technologies,75000,37,1230099880,99995559,full time,2005-10-02",
    "16,Swetha,Kapoor,male,Web Developer,Wipro,65000,32,1230987653,98732187,full time,2011-02-28",
    "24,Anup,Kumar,male,Associate Manager,Intel Technologies,95000,34,123223347,91117289,full time,2022-12-29"

  ];
  answerSeven: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,bankaccountnumber,primaryphonenumber,employee_type,joining_date",
    "1,Pardeep,Narwal,male,Software Engineer,Intel Technologies,20000,24,1230999884,99887766,full time,2019-05-02",
    "2,Sandeep,Dull,male,Web Developer,Synoric Technologies,50000,29,1230999894,0,full time,2016-03-19",
    "3,Neelima,Chowdary,female,Sr.manager,Maxima Encode,90000,40,1230999877,99886666,part time,2001-10-27",
    "4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,2022-12-28",
    "5,Priya,Soodh,female,Team Lead,Tcs,55000,30,1234565432,0,part time,2013-09-20",
    "6,Sai,Ruchitha,female,Sr.Manager,Vsoft Technologies,80000,35,1231231234,99876598,full time,2007-11-11",
    "7,John,Robert,unknown,trainee,wipro,15000,22,1234123412,99997777,full time,2022-12-28",
    "8,Sri,Divya,female,H.R,Argano technologies,45000,28,1234567890,98765432,full time,2018-02-01",
    "9,Rishank,Devadiga,male,Associate Manager,Infosys,75000,32,1234554321,0,full time,2010-06-05",
    "11,Sai,Latha,female,Associate Engineer,Tech Manhindra,35000,27,1234567895,99887722,full time,2018-05-10",
    "12,Thomas,Edward,unknown,Jr.Engineer,Synoric Technologies,40000,29,1230981231,0,full time,2022-12-28",
    "13,Smrithi,Kour,female,Web Developer,Tesla Technologies,75000,37,1230099880,99995559,full time,2005-10-02",
    "14,Mohan,Krishna,male,bench,Intel Technologies,30000,23,1234998874,99442647,full time,2022-12-28",
    "15,Tony,Edward,unknown,Manager,Tcs,95000,40,1234509876,98723456,full time,2005-01-27",
    "17,Usha,Sri,female,bench,Express Pvt ltd,18000,22,1289787435,99552891,full time,2022-12-28",
    "18,Narender,Hoshiyar,male,Application Developer,Ey technologies,65000,33,1230099007,99123999,full time,2009-02-10",
    "19,Clistofer,butt,unknown,Sr.Developer,West Agile,45000,25,1234098726,0,part time,2017-02-18",
    "20,Brinda,Mehta,female,Web Designer,Walking Tree Technologies,80000,36,1230034567,98217289,full time,2006-03-19",
    "21,Vamsi,Krishna,male,Software Engineer,Intel Technologies,50000,26,1230044567,98217289,part time,2016-03-19",
    "22,Neethu,Chopra,female,bench,Wipro,10000,26,1234444567,92227289,full time,2022-12-29",
    "23,Mahitha,Sushma,female,Software Engineer,Synoric Technologies,75000,31,1000044567,98212332,full time,2012-05-23",
    "24,Anup,Kumar,male,Associate Manager,Intel Technologies,95000,34,123223347,91117289,full time,2022-12-29",
    "25,Prasanth,Roy,male,bench,wipro,8000,22,1255554567,99917299,part time,2022-12-29",
    "26,Sri,Valli,female,Software Engineer,Synoric Technologies,8000,29,122299927,99932399,full time,2014-10-12",
    "27,Sri,Valli,female,Sr.Manager,Intense Technologies,6000,33,133399927,98882399,full time,2012-12-17",
    "28,Karthik,Singh,male,bench,Synoric Technologies,25000,23,144399927,98882399,full time,2022-12-17",
    "29,Anitha,Dull,female,bench,Tcs,30000,22,149349927,98767989,full time,2021-01-01"
  ];
  answerEight: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,bankaccountnumber,primaryphnenumber,employee_type,joining_date",
    "3,Neelima,Chowdary,female,Sr.manager,Maxima Encode,90000,40,1230999877,99886666,part time,2001-10-27",
    "6,Sai,Ruchitha,female,Sr.Manager,Vsoft Technologies,80000,35,1231231234,99876598,full time,2007-11-11",
    "9,Rishank,Devadiga,male,Associate Manager,Infosys,75000,32,1234554321,0,full time,2010-06-05",
    "10,Ram,Kapoor,male,Software Engineer,Intense Technologies,88000,38,1234567231,98765478,full time,2008-10-10",
    "13,Smrithi,Kour,female,Web Developer,Tesla Technologies,75000,37,1230099880,99995559,full time,2005-10-02",
    "15,Tony,Edward,unknown,Manager,Tcs,95000,40,1234509876,98723456,full time,2005-01-27",
    "16,Swetha,Kapoor,male,Web Developer,Wipro,65000,32,1230987653,98732187,full time,2011-02-28",
    "18,Narender,Hoshiyar,male,Application Developer,Ey technologies,65000,33,1230099007,99123999,full time,2009-02-10",
    "20,Brinda,Mehta,female,Web Designer,Walking Tree Technologies,80000,36,1230034567,98217289,full time,2006-03-19",
    "23,Mahitha,Sushma,female,Software Engineer,Synoric Technologies,75000,31,1000044567,98212332,full time,2012-05-23",
    "24,Anup,Kumar,male,Associate Manager,Intel Technologies,95000,34,123223347,91117289,full time,2022-12-29",
    "27,Sri,Valli,female,Sr.Manager,Intense Technologies,60000,33,133399927,98882399,full time,2012-12-17"

  ];
  answerNine: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,bankaccountnumber,primaryphnenumber,employee_type,joining_date",
    "1,Pardeep,Narwal,male,Software Engineer,Intel Technologies,20000,24,1230999884,99887766,full time,2019-05-02",
    "3,Neelima,Chowdary,female,Sr.manager,Maxima Encode,90000,40,1230999877,99886666,part time,2001-10-27",
    "4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,2022-12-28",
    "7,John,Robert,unknown,trainee,wipro,15000,22,1234123412,99997777,full time,2022-12-28",
    "10,Ram,Kapoor,male,Software Engineer,Intense Technologies,88000,38,1234567231,98765478,full time,2008-10-10",
    "13,Smrithi,Kour,female,Web Developer,Tesla Technologies,75000,37,1230099880,99995559,full time,2005-10-02",
    "14,Mohan,Krishna,male,bench,Intel Technologies,30000,23,1234998874,99442647,full time,2022-12-28",
    "15,Tony,Edward,unknown,Manager,Tcs,95000,40,1234509876,98723456,full time,2005-01-27",
    "17,Usha,Sri,female,bench,Express Pvt ltd,18000,22,1289787435,99552891,full time,2022-12-28",
    "19,Clistofer,butt,unknown,Sr.Developer,West Agile,45000,25,1234098726,0,part time,2017-02-18",
    "20,Brinda,Mehta,female,Web Designer,Walking Tree Technologies,80000,36,1230034567,98217289,full time,2006-03-19",
    "21,Vamsi,Krishna,male,Software Engineer,Intel Technologies,50000,26,1230044567,98217289,part time,2016-03-19",
    "22,Neethu,Chopra,female,bench,Wipro,10000,26,1234444567,92227289,full time,2022-12-29",
    "25,Prasanth,Roy,male,bench,wipro,8000,22,1255554567,99917299,part time,2022-12-29",
    "28,Karthik,Singh,male,bench,Synoric Technologies,25000,23,144399927,98882399,full time,2022-12-17",
    "29,Anitha,Dull,female,bench,Tcs,30000,22,149349927,98767989,full time,2021-01-01"

  ];
  answerTen: string[] = [
    "id,first_name,last_name,salary,designation",
    "2,Sandeep,Dull,50000,Web Developer",
    "4,Shiv,Kumar,30000,bench",
    "8,Sri,Divya,45000,H.R",
    "11,Sai,Latha,35000,Associate Engineer",
    "12,Thomas,Edward,40000,Jr.Engineer",
    "14,Mohan,Krishna,30000,bench",
    "19,Clistofer,butt,45000,Sr.Developer",
    "21,Vamsi,Krishna,50000,Software Engineer",
    "29,Anitha,Dull,30000,bench"

  ];
  answerEleven: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,bankaccountnumber,primaryphnenumber,employee_type,joining_date",
    "1,Pardeep,Narwal,male,Software Engineer,Intel Technologies,20000,24,1230999884,99887766,full time,2019-05-02",
    "4,Shiv,Kumar,male,bench,wipro,30000,22,1230987654,99223456,full time,2022-12-28",
    "5,Priya,Soodh,female,Team Lead,Tcs,55000,30,1234565432,0,part time,2013-09-20",
    "7,John,Robert,unknown,trainee,wipro,15000,22,1234123412,99997777,full time,2022-12-28",
    "14,Mohan,Krishna,male,bench,Intel Technologies,30000,23,1234998874,99442647,full time,2022-12-28",
    "15,Tony,Edward,unknown,Manager,Tcs,95000,40,1234509876,98723456,full time,2005-01-27",
    "16,Swetha,Kapoor,male,Web Developer,Wipro,65000,32,1230987653,98732187,full time,2011-02-28",
    "21,Vamsi,Krishna,male,Software Engineer,Intel Technologies,50000,26,1230044567,98217289,part time,2016-03-19",
    "22,Neethu,Chopra,female,bench,Wipro,10000,26,1234444567,92227289,full time,2022-12-29",
    "24,Anup,Kumar,male,Associate Manager,Intel Technologies,95000,34,123223347,91117289,full time,2022-12-29",
    "25,Prasanth,Roy,male,bench,wipro,8000,22,1255554567,99917299,part time,2022-12-29",
    "29,Anitha,Dull,female,bench,Tcs,30000,22,149349927,98767989,full time,2021-01-01"

  ];
  answerTwelve: string[] = [
    "id,first_name,last_name,gender,designation,company_name,salary,age,bankaccountnumber,primaryphnenumber,employee_type,joining_date",
    "1,Pardeep,Narwal,male,Software Engineer,Intel Technologies,20000,24,1230999884,99887766,full time,2019-05-02",
    "3,Neelima,Chowdary,female,Sr.manager,Maxima Encode,90000,40,1230999877,99886666,part time,2001-10-27",
    "5,Priya,Soodh,female,Team Lead,Tcs,55000,30,1234565432,0,part time,2013-09-20",
    "6,Sai,Ruchitha,female,Sr.Manager,Vsoft Technologies,80000,35,1231231234,99876598,full time,2007-11-11",
    "7,John,Robert,unknown,trainee,wipro,15000,22,1234123412,99997777,full time,2022-12-28",
    "8,Sri,Divya,female,H.R,Argano technologies,45000,28,1234567890,98765432,full time,2018-02-01",
    "9,Rishank,Devadiga,male,Associate Manager,Infosys,75000,32,1234554321,0,full time,2010-06-05",
    "10,Ram,Kapoor,male,Software Engineer,Intense Technologies,88000,38,1234567231,98765478,full time,2008-10-10",
    "11,Sai,Latha,female,Associate Engineer,Tech Manhindra,35000,27,1234567895,99887722,full time,2018-05-10",
    "13,Smrithi,Kour,female,Web Developer,Tesla Technologies,75000,37,1230099880,99995559,full time,2005-10-02",
    "15,Tony,Edward,unknown,Manager,Tcs,95000,40,1234509876,98723456,full time,2005-01-27",
    "16,Swetha,Kapoor,male,Web Developer,Wipro,65000,32,1230987653,98732187,full time,2011-02-28",
    "17,Usha,Sri,female,bench,Express Pvt ltd,18000,22,1289787435,99552891,full time,2022-12-28",
    "18,Narender,Hoshiyar,male,Application Developer,Ey technologies,65000,33,1230099007,99123999,full time,2009-02-10",
    "19,Clistofer,butt,unknown,Sr.Developer,West Agile,45000,25,1234098726,0,part time,2017-02-18",
    "20,Brinda,Mehta,female,Web Designer,Walking Tree Technologies,80000,36,1230034567,98217289,full time,2006-03-19",
    "22,Neethu,Chopra,female,bench,Wipro,10000,26,1234444567,92227289,full time,2022-12-29",
    "23,Mahitha,Sushma,female,Software Engineer,Synoric Technologies,75000,31,1000044567,98212332,full time,2012-05-23",
    "24,Anup,Kumar,male,Associate Manager,Intel Technologies,95000,34,123223347,91117289,full time,2023-01-13",
    "25,Prasanth,Roy,male,bench,wipro,8000,22,1255554567,99917299,part time,2022-12-29",
    "26,Sri,Valli,female,Software Engineer,Synoric Technologies,8000,29,122299927,99932399,full time,2014-10-12",
    "28,Karthik,Singh,male,bench,Synoric Technologies,25000,23,144399927,98882399,full time,2022-12-17"

  ];

  answerThirteen: string[] = [
    "first_name,sdesignation,age,male,salary",
    "Sri,Sr.Manager,33,female,60000",
    "Sandeep,Web Developer,29,male,50000",
    "Vamsi,Software Engineer,26,male,50000",
    "Anitha,bench,22,female,30000",
    "Shiv,bench,22,male,30000",
    "Thomas,Jr.Engineer,29,unknown,40000",
    "Mohan,bench,23,male,30000"

  ];

  
  mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  constructor(mediaDatamysql: MediaFreeVersionMapData) {
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediaDatamysql.mediaData.Free_MY_sql.Operators.audio;
    this.videoData = mediaDatamysql.mediaData.Free_MY_sql.Operators.video;
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

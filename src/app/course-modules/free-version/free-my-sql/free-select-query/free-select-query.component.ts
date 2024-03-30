import { Component, OnInit } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-select-query',
  templateUrl: './free-select-query.component.html',
  styleUrls: ['./free-select-query.component.scss']
})
export class FreeSelectQueryComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  elementId:string;
  elementId2:string;
  audioData:any;
  videoData:any;
  
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
  }
  mainTab(event:Event){
    this.elementId2 = (event.target as Element).id;
  }
  setVideoSpeed(speed: number){
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }

  answerOne: string[] = [
    "id,first_name,middle_name,last_name,designation,salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber",
    "1,Rajenra,Kumar,Mallina,CEO,1000000,Male,26,1,Maxima Encode,3453534,4589762",
    "2,Edward,Russell,Ayrton,Software Engineer,100000,Male,26,1,Intel Technologies,1234567,1234566",
    "3,Neelima,Chowdary,Gutta,Trainee,25000,Female,21,1,Divis,6362474,6238645",
    "4,Shiva,Kumar,Selvanan,Manager,200000,Male,30,1,Vsoft Technologies,5555344,5324213",
    "5,Priya,Soodh,Kapoor,Actress,700000,Female,32,1,Tseries,7326364,7123456",
    "6,Sai,Ruchitha,Atmakuri,junior Software Engineer,30000,Female,24,0,Tcs,23456756,2345665",
    "7,John,Robert,Mortimer,Web Developer,60000,Male,25,1,Intense Tehnologies,3456723,3456764",
    "8,Sri,Divya,Kothapalli,Team Lead,70000,Female,28,0,Synoric,1874567,1876487",
    "9,Swetha,Kumari,Pasala,Software Engineer,20000,Female,22,0,Wipro,3456743,3456234",
    "10,Sri,Latha,Basani,Team Lead,80000,Female,28,1,Synoric,1874521,1876475",
    "11,Thomas,Edward,collcutt,Sr.Manager,10000,Male,25,1,Infosys,2345679,2345345",
    "12,smrithi,kour,Kothapalli,Web developer,30000,Female,22,1,Wipro,1872267,1873387",
    "13,Satya,krishna,Basani,Software Engineer,70000,Female,26,1,Synoric,1875521,1346475",
    "14,Tony,Edward,collcutt,Manager,900000,Female,25,0,Infosys,2345679,2655345",
    "15,Swetha,Sri,kapoor,web developer,40000,Female,23,1,Wipro,8772267,8756489"
  ];

  answerTwo: string[] = [
    "id,first_name,midle_name,last_name,designation,salary",
    "1,Rajenra,Kumar,Mallina,CEO,1000000",
    "2,Edward,Russell,Ayrton,Software Engineer,100000",
    "3,Neelima,Chowdary,Gutta,Trainee,25000",
    "4,Shiva,Kumar,Selvanan,Manager,200000",
    "5,Priya,Soodh,Kapoor,Actress,700000",
    "6,Sai,Ruchitha,Atmakuri,junior Software Engineer,30000",
    "7,John,Robert,Mortimer,Web Developer,60000",
    "8,Sri,Divya,Kothapalli,Team Lead,70000",
    "9,Swetha,Kumari,Pasala,Software Engineer,20000",
    "10,Sri,Latha,Basani,Team Lead,80000",
    "11,Thomas,Edward,collcutt,Sr.Manager,10000",
    "12,smrithi,kour,Kothapalli,Web developer,30000",
    "13,Satya,krishna,Basani,Software Engineer,70000",
    "14,Tony,Edward,collcutt,Manager,900000",
    "15,Swetha,Sri,kapoor,web developer,40000"

  ];
  answerThree: string[] = [
    "companyname",
    "Maxima Encode",
    "Intel Technologies",
    "Divis",
    "Vsoft Technologies",
    "Tseries",
    "Tcs",
    "Intense Tehnologies",
    "Synoric",
    "Wipro",
    "Infosys"
  ];
  answerFour: string[] = [
    "id,first_name,middle_name,last_name",
    "1,Rajenra,Kumar,Mallina",
    "2,Edward,Russell,Ayrton",
    "3,Neelima,Chowdary,Gutta",
    "4,Shiva,Kumar,Selvana",
    "5,Priya,Soodh,Kapoor",
    "7,John,Robert,Mortimer",
    "10,Sri,Latha,Basani",
    "11,Thomas,Edward,collcutt",
    "12,smrithi,kour,Kothapalli",
    "13,Satya,krishna,Basani",
    "15,Swetha,Sri,kapoor"
  ];
  answerFive: string[] = [
    "id,first_name,middle_name,last_name,designation,salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber",
    "9,Swetha,Kumari,Pasala,Software Engineer,20000,Female,22,0,Wipro,3456743,3456234",
    "12,smrithi,kour,Kothapalli,Web developer,30000,Female,22,1,Wipro,1872267,1873387",
    "15,Swetha,Sri,kapoor,web developer,40000,Female,23,1,Wipro,8772267,8756489"

  ];
  answerSix: string[] = [
    "id,first_name,middle_name,last_name,designation,salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber",
    "11,Thomas,Edward,collcutt,Sr.Manager,10000,Male,25,1,Infosys,2345679,2345345"

  ];
  answerSeven: string[] = [
    "id,first_name,middle_name,last_name,salary",
    "2,Edward,Russell,Ayrton,100000",
    "9,Swetha,Kumari,Pasala,20000",
    "13,Satya,krishna,Basani,70000"
  ];
  answerEight: string[] = [
    "salary,primaryphonenumber,secondaryphonenumber",
    "25000,6362474,6238645",
    "700000,7326364,7123456",
    "30000,23456756,2345665",
    "70000,1874567,1876487",
    "20000,3456743,3456234",
    "80000,1874521,1876475",
    "30000,1872267,1873387",
    "900000,2345679,2655345"
  ];
  answerNine: string[] = [
    "id,first_name,middle_name,last_name,designation,salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber",
    "1,Rajenra,Kumar,Mallina,CEO,1000000,Male,26,1,Maxima Encode,3453534,4589762",
    "2,Edward,Russell,Ayrton,Software Engineer,100000,Male,26,1,Intel Technologies,1234567,1234566",
    "3,Neelima,Chowdary,Gutta,Trainee,25000,Female,21,1,Divis,6362474,6238645",
    "4,Shiva,Kumar,Selvanan,Manager,200000,Male,30,1,Vsoft Technologies,5555344,5324213",
    "5,Priya,Soodh,Kapoor,Actress,700000,Female,32,1,Tseries,7326364,7123456",
    "6,Sai,Ruchitha,Atmakuri,junior Software Engineer,30000,Female,24,0,Tcs,23456756,2345665",
    "7,John,Robert,Mortimer,Web Developer,60000,Male,25,1,Intense Tehnologies,3456723,3456764",
    "8,Sri,Divya,Kothapalli,Team Lead,70000,Female,28,0,Synoric,1874567,1876487",
    "10,Sri,Latha,Basani,Team Lead,80000,Female,28,1,Synoric,1874521,1876475",
    "11,Thomas,Edward,collcutt,Sr.Manager,10000,Male,25,1,Infosys,2345679,2345345",
    "13,Satya,krishna,Basani,Software Engineer,70000,Female,26,1,Synoric,1875521,1346475",
    "14,Tony,Edward,collcutt,Manager,900000,Female,25,0,Infosys,2345679,2655345"
  ];
  answerTen: string[] = [
    "id,first_name,middle_name,last_name,designation,salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber",
    "6,Sai,Ruchitha,Atmakuri,junior Software Engineer,30000,Female,24,0,Tcs,23456756,2345665",
    "12,smrithi,kour,Kothapalli,Web developer,30000,Female,22,1,Wipro,1872267,1873387",
    "15,Swetha,Sri,kapoor,web developer,40000,Female,23,1,Wipro,8772267,8756489"
  ];
  answerEleven: string[] = [
    "id,designation",
    "5,Actress",
    "11,Sr.Manager",
    "14,Manager"
  ];
  answerTwelve: string[] = [
    "designation,age,gender,primaryphonenumber,companyname",
    "Team Lead,28,Female,1874567,Synoric",
    "Team Lead,28,Female,1874521,Synoric"
  ];
  answerThirteen: string[] = [
    "id,first_name,middle_name,last_name,salary",
    "1,Rajenra,Kumar,Mallina,1000000",
    "2,Edward,Russell,Ayrton,100000",
    "4,Shiva,Kumar,Selvanan,200000",
    "5,Priya,Soodh,Kapoor,700000",
    "7,John,Robert,Mortimer,60000",
    "8,Sri,Divya,Kothapalli,70000",
    "10,Sri,Latha,Basani,80000",
    "13,Satya,krishna,Basani,70000",
    "14,Tony,Edward,collcutt,900000"
  ];
  constructor(mediaDatamysql: MediaFreeVersionMapData) { 
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediaDatamysql.mediaData.Free_MY_sql.Select_Query.audio;
    this.videoData = mediaDatamysql.mediaData.Free_MY_sql.Select_Query.video;
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
}

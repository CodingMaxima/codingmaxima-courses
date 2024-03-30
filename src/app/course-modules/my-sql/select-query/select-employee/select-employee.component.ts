import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-select-employee',
  templateUrl: './select-employee.component.html',
  styleUrls: ['./select-employee.component.scss']
})
export class SelectEmployeeComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  JsonData: any;

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
  constructor(mediamap:MediaMySqlMapData) { 
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediamap.mediaData.Select_Query.Select_Employee.audio;
    this.videoData = mediamap.mediaData.Select_Query.Select_Employee.video;
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

  handleFileInput(event: any) {
    console.log(event.files);
    for (let file of event.files) {
      console.log(file)
      let reader = new FileReader();
      reader.onload = () => {
        var text = reader.result;
        this.JsonData = this.csvJSON(text);
        console.log(this.JsonData);
      }
      reader.readAsText(file);
    };
  }

  csvJSON(csv: any) {
    // Convert the data to String and split it in an array 
    var array = csv.toString().split("\r");
    // All the rows of the CSV will be converted to JSON objects which will be added to result in an array 
    let result: any[] = [];

    // The array[0] contains all the header columns so we store them  in headers array 
    let headers = array[0].split(",")
    this.colums = headers;

    // Since headers are separated, we need to traverse remaining n-1 rows.  
    for (let i = 1; i < array.length - 1; i++) {
      let obj: any = {};

      // Create an empty object to later add values of the current row to it Declare string str as current array value to change the delimiter and  
      // store the generated string in a new string s 
      let str = array[i]
      let s = ''

      // By Default, we get the comma separated values of a cell in quotes " " so we  use flag to keep track of quotes and  split the string accordingly 
      // If we encounter opening quote (")  then we keep commas as it is otherwise we replace them with pipe | We keep adding the characters we  traverse to a String s 
      let flag = 0
      for (let ch of str) {
        if (ch === '"' && flag === 0) {
          flag = 1
        }
        else if (ch === '"' && flag == 1) flag = 0
        if (ch === ',' && flag === 0) ch = '|'
        if (ch !== '"') s += ch
      }

      // Split the string using pipe delimiter | and store the values in a properties array 
      let properties: any = s.split("|")

      // For each header, if the value contains multiple comma separated data, then we store it in the form of array otherwise directly the value is stored 
      for (let j in headers) {
        //this will split the address string into futher array. we don't need further array fields
        //if (properties[j].includes(", ")) {
        //  obj[headers[j]] = properties[j]
        //    .split(",").map(item => item.trim())
        //}
        //else
        obj[headers[j]] = properties[j]

        //let colDescription = "Beneficiary's Legal First Name";
        //let col_name = Utilities.getColumn(colDescription);
      }

      // Add the generated object to our result array  
      result.push(obj);
    }

    //return result; //JavaScript object
    return result; // JSON.stringify(result); //JSON
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

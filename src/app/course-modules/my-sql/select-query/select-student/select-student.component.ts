import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.scss']
})
export class SelectStudentComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  JsonData: any;
  elementId: string;
  elementId2: string;
  audioData:any;
  videoData:any;

  answerOne: string[] = [
    "id,first_name,middle_name,last_name,gender,age,aadharNumber,percentage,collegeName,Grade,branch",
    "1,Heera,Chowdary,Mullapudi,Male,20,134569845665,80.5,Sasi Engineering College,A,CSE",
    "2,Naveen,Kumar,Elaganti,Male,21,137669845622,65.5,Sri Ramulu Engineering College,C,ECE",
    "3,Preethi,Soodh,Kapoor,Female,21,134569849845,75,Sasi Engineering College,B,CSE",
    "4,Sandeep,kishan,Dull,Male,22,123487698456,55.3,Sasi Engineering College,D,ECE",
    "5,Krithika,Sri,Mehtha,Female,21,134569842341,45,Sasi Engineering College,F,IT",
    "6,Amelia,Dyer,Doss,Female,22,134569845612,95,St.Marry Engineering College,O,Civil",
    "7,William,Morris,Dyer,Male,21,134587468456,60,visit Engineering College,D,Civil",
    "8,Judias,Buenoano,Puneeth,Female,21,134569882764,75.67,Kite Engineering College,B,Pharma",
    "9,Deepak,Nivas,Hooda,Male,22,134598768456,88,Visit Engineering College,A,Pharma",
    "10,Naveen,Kumar,Mehtha,Male,21,134587768456,49,visit Engineering College,F,Civil",
    "11,Amritha,Rao,Dyer,Female,22,133569882764,67,Kite Engineering College,C,Pharma",
    "12,Deepak,kumar,Dull,Male,21,134888768456,88,Sasi Engineering College,A,Civil",
    "13,Serena,William,singh,Female,21,134587468444,77,Sri Venkateswara Engineering College,B,Civil",
    "14,Rick,Grims,Dutth,Male,22,134569882264,52.4,Malla Reddy Engineering College,C,Mech",
    "15,Prince,Eugene,Carl,Male,22,134598767676,92,AKRJ Engineering College,O,Pharma"
  ];
  answerTwo: string[] = [
    "id,first_name,middle_name,last_name,gender,age,aadharNumber,percentage,collegrName,grade,branch",
    "1,Heera,Chowdary,Mullapudi,Male,20,134569845665,80.5,Sasi Engineering College,A,CSE",
    "3,Preethi,Soodh,Kapoor,Female,21,134569849845,75,Sasi Engineering College,B,CSE",
    "4,Sandeep,kishan,Dull,Male,22,123487698456,55.3,Sasi Engineering College,D,ECE",
    "5,Krithika,Sri,Mehtha,Female,21,134569842341,45,Sasi Engineering College,F,IT",
    "12,Deepak,kumar,Dull,Male,21,134888768456,88,Sasi Engineering College,A,Civil"
  ];
  answerThree: string[] = [
    "id,first_name,middle_name,last_name,gender,age,aadharNumber,percentage,collegeName,grade,branch",
    "7,William,Morris,Dyer,Male,21,134587468456,60,visit Engineering College,D,Civil",
    "9,Deepak,Nivas,Hooda,Male,22,134598768456,88,Visit Engineering College,A,Pharma",
    "10,Naveen,Kumar,Mehtha,Male,21,134587768456,49,visit Engineering College,F,Civil"
  ];
  answerFour: string[] = [
    "id,first_name,middle_name,branch",
    "1,Heera,Chowdary,CSE",
    "9,Deepak,Nivas,Pharma",
    "12,Deepak,kumar,Civil"
  ];
  answerFive: string[] = [
    "aadharNumber,collegeName,first_name,middle_name,last_name",
    "134569845665,Sasi Engineering College,Heera,Chowdary,Mullapudi",
    "137669845622,Sri Ramulu Engineering College,Naveen,Kumar,Elaganti",
    "134569849845,Sasi Engineering College,Preethi,Soodh,Kapoor",
    "123487698456,Sasi Engineering College,Sandeep,kishan,Dull",
    "134569842341,Sasi Engineering College,Krithika,Sri,Mehtha",
    "134569845612,St.Marry Engineering College,Amelia,Dyer,Doss",
    "134587468456,visit Engineering College,William,Morris,Dyer",
    "134587768456,visit Engineering College,Naveen,Kumar,Mehtha",
    "134888768456,Sasi Engineering College,Deepak,kumar,Dull",
    "134587468444,Sri Venkateswara Engineering College,Serena,William,singh",
    "134569882264,Malla Reddy Engineering College,Rick,Grims,Dutth"

  ];
  answerSix: string[] = [
    "id,gender,first_name,middle_name,last_name,aadharNumber",
    "1,Male,Heera,Chowdary,Mullapudi,134569845665",
    "3,Female,Preethi,Soodh,Kapoor,134569849845",
    "4,Male,Sandeep,kishan,Dull,123487698456",
    "5,Female,Krithika,Sri,Mehtha,134569842341",
    "6,Female,Amelia,Dyer,Doss,134569845612",
    "9,Male,Deepak,Nivas,Hooda,134598768456",
    "11,Female,Amritha,Rao,Dyer,133569882764",
    "12,Male,Deepak,kumar,Dull,134888768456",
    "14,Male,Rick,Grims,Dutth,134569882264",
    "15,Male,Prince,Eugene,Carl,134598767676"
  ];
  answerSeven: string[] = [
    "id,first_name,middle_name,last_name,gender,age,aadharNumber,percentage,collegeNmae,grade,branch",
    "2,Naveen,Kumar,Elaganti,Male,21,137669845622,65.5,Sri Ramulu Engineering College,C,ECE",
    "6,Amelia,Dyer,Doss,Female,22,134569845612,95,St.Marry Engineering College,O,Civil",
    "7,William,Morris,Dyer,Male,21,134587468456,60,visit Engineering College,D,Civil",
    "8,Judias,Buenoano,Puneeth,Female,21,134569882764,75.67,Kite Engineering College,B,Pharma",
    "10,Naveen,Kumar,Mehtha,Male,21,134587768456,49,visit Engineering College,F,Civil",
    "11,Amritha,Rao,Dyer,Female,22,133569882764,67,Kite Engineering College,C,Pharma",
    "13,Serena,William,singh,Female,21,134587468444,77,Sri Venkateswara Engineering College,B,Civil"
  ];
  answerEight: string[] = [
    "id,first_name,middle_name,last_name,gender,age,aadharNumber,percentage,collegeName,grade,branch",
    "4,Sandeep,kishan,Dull,Male,22,123487698456,55.3,Sasi Engineering College,D,ECE",
    "6,Amelia,Dyer,Doss,Female,22,134569845612,95,St.Marry Engineering College,O,Civil",
    "9,Deepak,Nivas,Hooda,Male,22,134598768456,88,Visit Engineering College,A,Pharma",
    "11,Amritha,Rao,Dyer,Female,22,133569882764,67,Kite Engineering College,C,Pharma",
    "14,Rick,Grims,Dutth,Male,22,134569882264,52.4,Malla Reddy Engineering College,C,Mech",
    "15,Prince,Eugene,Carl,Male,22,134598767676,92,AKRJ Engineering College,O,Pharma"
  ];
  answerNine: string[] = [
    "collegeName",
    "Sasi Engineering College",
    "Sri Ramulu Engineering College",
    "St.Marry Engineering College",
    "visit Engineering College",
    "Kite Engineering College",
    "Sri Venkateswara Engineering College",
    "Malla Reddy Engineering College",
    "AKRJ Engineering College"
  ];
  answerTen: string[] = [
    "first_name,middle_name,last_name,designation",
    "Preethi,Soodh,Kapoor,CSE",
    "Krithika,Sri,Mehtha,IT",
    "Judias,Buenoano,Puneeth,Pharma",
    "Amritha,Rao,Dyer,Pharma",
    "Serena,William,singh,Civil"
  ];

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
  }
  mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  constructor(mediamap:MediaMySqlMapData) {
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediamap.mediaData.Select_Query.Select_Student.audio;
    this.videoData = mediamap.mediaData.Select_Query.Select_Student.video;
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
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }


}


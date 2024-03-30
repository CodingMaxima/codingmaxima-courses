import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.scss']
})
export class UnionComponent implements OnInit {
  toggleOn: boolean[] = [false, false];
  buttonValue: string[] = ["Show Answer", "Show Answer"];
  colums: any;
  elementId: string;
  elementId2:string;
  audioData:any;
  videoData:any;

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.toggleOn = [false, false];
    this.buttonValue = ["Show Answer", "Show Answer"];
  }
 mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  answerOne: string[] = [
    "last_name",
    "Narwal",
    "Dull",
    "Chowdary",
    "Kumar",
    "Soodh",
    "Ruchitha",
    "Robert",
    "Divya",
    "Devadiga",
    "Kapoor",
    "Latha",
    "Edward",
    "Kour",
    "Krishna",
    "Sri",
    "Hoshiyar",
    "butt",
    "Mehta",
    "Chopra",
    "Sushma",
    "Roy",
    "Valli",
    "Singh",
    "Harsith",
    "Kishan",
    "Dyer",
    "Morris",
    "Puneeth",
    "Rao",
    "Chillar",
    "Williams",
    "Grims",
    "dutt",
    "Priya",
    "Manthri",
    "Reza"
  ];
  answerTwo: string[] = [
    "last_name",
    "Narwal",
    "Dull",
    "Chowdary",
    "Kumar",
    "Soodh",
    "Ruchitha",
    "Robert",
    "Divya",
    "Devadiga",
    "Kapoor",
    "Latha",
    "Edward",
    "Kour",
    "Krishna",
    "Edward",
    "Kapoor",
    "Sri",
    "Hoshiyar",
    "Dutt",
    "Mehta",
    "Krishna",
    "Chopra",
    "Sushma",
    "Kumar",
    "Roy",
    "Valli",
    "Valli",
    "Singh",
    "Dull",
    "Kumar",
    "Soodh",
    "Harsith",
    "Kishan",
    "Sri",
    "Mehta",
    "Dyer",
    "Morris",
    "Puneeth",
    "Kumar",
    "Rao",
    "Singh",
    "Chillar",
    "Williams",
    "Grims",
    "kapoor",
    "dutt",
    "Soodh",
    "Singh",
    "Dyer",
    "Priya",
    "Krishna",
    "Kapoor",
    "Priya",
    "Sri",
    "Singh",
    "Kumar",
    "Kour",
    "Manthri",
    "Reza",
    "Mehta"
];
  answerThree: string[] = [
    "age",
    "24",
    "29",
    "40",
    "22",
    "30",
    "35",
    "28",
    "32",
    "38",
    "27",
    "37",
    "23",
    "33",
    "25",
    "36",
    "26",
    "31",
    "34",
    "17",
    "16",
    "19",
    "20",
    "21",
    "43",
    "18"
  ];
  answerFour: string[] = [
    "age",
    "24",
    "29",
    "40",
    "22",
    "30",
    "35",
    "22",
    "28",
    "32",
    "38",
    "27",
    "29",
    "37",
    "23",
    "40",
    "32",
    "22",
    "33",
    "25",
    "36",
    "26",
    "26",
    "31",
    "34",
    "22",
    "29",
    "33",
    "23",
    "22",
    "17",
    "16",
    "34",
    "19",
    "22",
    "33",
    "40",
    "23",
    "25",
    "20",
    "26",
    "21",
    "33",
    "43",
    "22",
    "19",
    "18",
    "16",
    "43",
    "35",
    "26",
    "30",
    "26",
    "24",
    "30",
    "27",
    "33",
    "23",
    "26",
    "24"
  ];

  answerFive: string[] = [
    "gender",
    "male",
    "female",
    "unknown"
  ];
  answerSix: string[] = [
    "first_name,last_name,gender",
    "Pardeep,Narwal,male",
    "Sandeep,Dull,male",
    "Neelima,Chowdary,female",
    "Shiv,Kumar,male",
    "Priya,Soodh,female",
    "Sai,Ruchitha,female",
    "John,Robert,unknown",
    "Sri,Divya,female",
    "Rishank,Devadiga,male",
    "Ram,Kapoor,male",
    "Sai,Latha,female",
    "Thomas,Edward,unknown",
    "Smrithi,Kour,female",
    "Mohan,Krishna,male",
    "Tony,Edward,unknown",
    "Swetha,Kapoor,male",
    "Usha,Sri,female",
    "Narender,Hoshiyar,male",
    "Clistofer,butt,unknown",
    "Brinda,Mehta,female",
    "Vamsi,Krishna,male",
    "Neethu,Chopra,female",
    "Mahitha,Sushma,female",
    "Anup,Kumar,male",
    "Prasanth,Roy,male",
    "Sri,Valli,female",
    "Sri,Valli,female",
    "Karthik,Singh,male",
    "Anitha,Dull,female",
    "Naveen,Kumar,male",
    "Preethi,Soodh,female",
    "Sri,Harsith,male",
    "Sandeep,Kishan,male",
    "Krithika,Sri,female",
    "Adhi,Mehta,male",
    "Amelia,Dyer,female",
    "William,Morris,male",
    "Judias,Puneeth,male",
    "Rohit,Kumar,male",
    "Amritha,Rao,female",
    "Deepika,Singh,female",
    "Manjeeth,Chillar,male",
    "Serena,Williams,female",
    "Rick,Grims,male",
    "Krish,kapoor,male",
    "Sweety,dutt,female",
    "Pihu,Soodh,female",
    "Tarun,Singh,male",
    "Nandini,Dyer,female",
    "Sri,Priya,female",
    "Ram,Krishna,male",
    "Subham,Kapoor,male",
    "Hema,Sri,female",
    "Honey,Singh,male",
    "Vinod,Kumar,male",
    "Supriya,Kour,female",
    "Ramya,Manthri,female",
    "Ali,Reza,male",
    "Srikrithi,Mehta,female"
  ];

  constructor(mediamap:MediaMySqlMapData) {
    this.elementId2 = "one";
    this.elementId = "question1";
    this.audioData = mediamap.mediaData.Others.Union.audio;
    this.videoData = mediamap.mediaData.Others.Union.video;
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

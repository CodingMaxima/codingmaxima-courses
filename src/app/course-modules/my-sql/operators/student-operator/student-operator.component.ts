import { Component, OnInit } from '@angular/core';
import { MediaMySqlMapData } from '../../media-map-data';

@Component({
  selector: 'app-student-operator',
  templateUrl: './student-operator.component.html',
  styleUrls: ['./student-operator.component.scss']
})
export class StudentOperatorComponent implements OnInit {
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
    "id,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
    "1,Naveen,Kumar,male,17,900,Visit Engineering College,A,C.S.E,6",
    "4,Sandeep,Kishan,male,19,650,Kite Engineering College,D,Civil,3",
    "10,Rohit,Kumar,male,20,930,Andhra University,A,civil,7",
    "16,Krish,kapoor,male,19,640,AKRJ Engineerig College,D,Petroleum Engineer,2",
    "22,Ram,Krishna,male,30,700,Andhra University,c,Bsc.Chemistry,5",
    "23,Subham,Kapoor,male,26,890,Kite Engineering College,B,Msc.Maths,2",
    "26,Vinod,Kumar,male,27,934,Sri Vasavi Engineering COllege,A,Msc.Maths,5",
    "27,Supriya,Kour,female,33,625,sai Degree College,D,C.S.E,2"

  ];
  answerTwo: string[] = [
    "id,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
    "11,Amritha,Rao,female,26,945,Sri Vasavi Engineering College,A,Chemistry,1",
    "20,Nandini,Dyer,female,35,587,sai Degree College,D,Bsc.Chemistry,3",
    "22,Ram,Krishna,male,30,700,Andhra University,c,Bsc.Chemistry,5",
    "24,Hema,Sri,female,24,587,sai Degree College,c,Bsc.Chemistry,3",
    "25,Honey,Singh,male,30,858,Andhra University,B,Chemistry,4",
    "28,Ramya,Manthri,female,23,988,AKRJ Engineering College,A,Chemistry,4",
    "29,Ali,Reza,male,26,768,Sri Ramulu Engineering College,B,Chemistry,3"

  ];
  answerThree: string[] = [
    "roll_number,first_name,last_name,total_marks,branch",
    "3,Sri,Harsith,700,IT",
    "5,Krithika,Sri,570,Aeronatics",
    "11,Amritha,Rao,945,Chemistry",
    "15,Rick,Grims,564,EEE",
    "16,Krish,kapoor,640,Petroleum Engineer",
    "21,Sri,Priya,650,C.S.E",
    "27,Supriya,Kour,625,C.S.E",
    "30,Srikrithi,Mehta,767,Msc.Maths"
  ];
  answerFour: string[] = [
    "roll_number,first_name,last_name,college_name,age,gender,total_marks",
    "1,Naveen,Kumar,Visit Engineering College,17,male,900",
    "4,Sandeep,Kishan,Kite Engineering College,19,male,650",
    "13,Manjeeth,Chillar,Kite Engineering College,33,male,770",
    "19,Tarun,Singh,Sri Vasavi Engineering College,43,male,769",
    "20,Nandini,Dyer,sai Degree College,35,female,587",
    "22,Ram,Krishna,Andhra University,30,male,700",
    "28,Ramya,Manthri,AKRJ Engineering College,23,female,988"

  ];
  answerFive: string[] = [
    "roll_number,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
    "21,Sri,Priya,female,26,650,Kite Engineering College,D,C.S.E,4",
    "27,Supriya,Kour,female,33,625,sai Degree College,D,C.S.E,2"

  ];
  answerSix: string[] = [
    "first_name,gender,college_name,branch,total_marks,grade",
    "Naveen,male,Visit Engineering College,C.S.E,900,A",
    "Rohit,male,Andhra University,civil,930,A",
    "Krish,male,AKRJ Engineerig College,Petroleum Engineer,640,D",
    "Subham,male,Kite Engineering College,Msc.Maths,890,B",
    "Vinod,male,Sri Vasavi Engineering COllege,Msc.Maths,934,A",
    "Supriya,female,sai Degree College,C.S.E,625,D"

  ];
  answerSeven: string[] = [
    "roll_number,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
    "1,Naveen,Kumar,male,17,900,Visit Engineering College,A,C.S.E,6",
    "3,Sri,Harsith,male,34,700,Andhra University,C,IT,5",
    "5,Krithika,Sri,female,22,570,Sri Ramulu Engineering College,E,Aeronatics,8",
    "6,Adhi,Mehta,male,33,850,Sai Degree College,B,Computer Science,4",
    "7,Amelia,Dyer,female,40,510,Venkateswara University,C,Msc.Maths,3",
    "8,William,Morris,male,23,490,Visit Engineering College,E,Bsc.Maths,1",
    "10,Rohit,Kumar,male,20,930,Andhra University,A,civil,7",
    "11,Amritha,Rao,female,26,945,Sri Vasavi Engineering College,A,Chemistry,1",
    "13,Manjeeth,Chillar,male,33,770,Kite Engineering College,C,Bsc.Physics,3",
    "14,Serena,Williams,female,43,876,Adithya College,B,B.com Computers,1",
    "15,Rick,Grims,male,22,564,Malla Reddy Engineering College,E,EEE,7",
    "17,Sweety,dutt,female,18,980,Sasi College,A,Bi.P.C,1",
    "18,Pihu,Soodh,female,16,855,St.John College,B,M.P.C,2",
    "19,Tarun,Singh,male,43,769,Sri Vasavi Engineering College,C,Civil,7",
    "22,Ram,Krishna,male,30,700,Andhra University,c,Bsc.Chemistry,5",
    "23,Subham,Kapoor,male,26,890,Kite Engineering College,B,Msc.Maths,2",
    "24,Hema,Sri,female,24,587,sai Degree College,c,Bsc.Chemistry,3",
    "25,Honey,Singh,male,30,858,Andhra University,B,Chemistry,4",
    "26,Vinod,Kumar,male,27,934,Sri Vasavi Engineering COllege,A,Msc.Maths,5",
    "28,Ramya,Manthri,female,23,988,AKRJ Engineering College,A,Chemistry,4",
    "29,Ali,Reza,male,26,768,Sri Ramulu Engineering College,B,850,3",
    "30,Srikrithi,Mehta,female,24,767,sai Degree College,B,Msc.Maths,2"

  ];
  answerEight: string[] = [
    "roll_number,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
    "2,Preethi,Soodh,female,16,600,St.josh college,D,M.P.C,3",
    "3,Sri,Harsith,male,34,700,Andhra University,C,IT,5",
    "4,Sandeep,Kishan,male,19,650,Kite Engineering College,D,Civil,3",
    "9,Judias,Puneeth,male,25,605,Sri Ramulu Engineering College,D,M.Tech Computers,3",
    "12,Deepika,Singh,female,21,650,St.John College,D,E.C.E,5",
    "13,Manjeeth,Chillar,male,33,770,Kite Engineering College,C,Bsc.Physics,3",
    "16,Krish,kapoor,male,19,640,AKRJ Engineerig College,D,Petroleum Engineer,2",
    "19,Tarun,Singh,male,43,769,Sri Vasavi Engineering College,C,Civil,7",
    "21,Sri,Priya,female,26,650,Kite Engineering College,D,C.S.E,4",
    "22,Ram,Krishna,male,30,700,Andhra University,c,Bsc.Chemistry,5",
    "27,Supriya,Kour,female,33,625,sai Degree College,D,C.S.E,2",
    "29,Ali,Reza,male,26,768,Sri Ramulu Engineering College,B,850,3",
    "30,Srikrithi,Mehta,female,24,767,sai Degree College,B,Msc.Maths,2"
 ];
  answerNine: string[] = [
    "roll_number,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
    "1,Naveen,Kumar,male,17,900,Visit Engineering College,A,C.S.E,6",
    "5,Krithika,Sri,female,22,570,Sri Ramulu Engineering College,E,Aeronatics,8",
    "8,William,Morris,male,23,490,Visit Engineering College,E,Bsc.Maths,1",
    "10,Rohit,Kumar,male,20,930,Andhra University,A,civil,7",
    "11,Amritha,Rao,female,26,945,Sri Vasavi Engineering College,A,Chemistry,1",
    "14,Serena,Williams,female,43,876,Adithya College,B,B.com Computers,1",
    "15,Rick,Grims,male,22,564,Malla Reddy Engineering College,E,EEE,7",
    "16,Krish,kapoor,male,19,640,AKRJ Engineerig College,D,Petroleum Engineer,2",
    "17,Sweety,dutt,female,18,980,Sasi College,A,Bi.P.C,1",
    "18,Pihu,Soodh,female,16,855,St.John College,B,M.P.C,2",
    "19,Tarun,Singh,male,43,769,Sri Vasavi Engineering College,C,Civil,7",
    "23,Subham,Kapoor,male,26,890,Kite Engineering College,B,Msc.Maths,2",
    "27,Supriya,Kour,female,33,625,sai Degree College,D,C.S.E,2",
    "30,Srikrithi,Mehta,female,24,767,sai Degree College,B,Msc.Maths,2"
 ];

  answerTen: string[] = [
    "roll_number,first_name,last_name,gender,total_marks,branch",
    "6,Adhi,Mehta,male,850,Computer Science",
    "29,Ali,Reza,male,768,850",
    "7,Amelia,Dyer,female,510,Msc.Maths",
    "12,Deepika,Singh,female,650,E.C.E",
    "24,Hema,Sri,female,587,Bsc.Chemistry",
    "25,Honey,Singh,male,858,Chemistry",
    "9,Judias,Puneeth,male,605,M.Tech Computers",
    "16,Krish,kapoor,male,640,Petroleum Engineer",
    "13,Manjeeth,Chillar,male,770,Bsc.Physics",
    "20,Nandini,Dyer,female,587,Bsc.Chemistry",
    "18,Pihu,Soodh,female,855,M.P.C",
    "2,Preethi,Soodh,female,600,M.P.C",
    "22,Ram,Krishna,male,700,Bsc.Chemistry",
    "28,Ramya,Manthri,female,988,Chemistry",
    "4,Sandeep,Kishan,male,650,Civil",
    "3,Sri,Harsith,male,700,IT",
    "21,Sri,Priya,female,650,C.S.E",
    "30,Srikrithi,Mehta,female,767,Msc.Maths",
    "23,Subham,Kapoor,male,890,Msc.Maths",
    "27,Supriya,Kour,female,625,C.S.E",
    "26,Vinod,Kumar,male,934,Msc.Maths"
  ];

  answerEleven: string[] = [
    "roll_number,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
    "7,Amelia,Dyer,female,40,510,Venkateswara University,C,Msc.Maths,3",
    "17,Sweety,dutt,female,18,980,Sasi College,A,Bi.P.C,1",
    "20,Nandini,Dyer,female,35,587,sai Degree College,D,Bsc.Chemistry,3",
    "22,Ram,Krishna,male,30,700,Andhra University,c,Bsc.Chemistry,5",
    "23,Subham,Kapoor,male,26,890,Kite Engineering College,B,Msc.Maths,2",
    "24,Hema,Sri,female,24,587,sai Degree College,c,Bsc.Chemistry,3",
    "26,Vinod,Kumar,male,27,934,Sri Vasavi Engineering COllege,A,Msc.Maths,5",
    "30,Srikrithi,Mehta,female,24,767,sai Degree College,B,Msc.Maths,2"

  ];
  answerTwelve: string[] = [
    "first_name,last_name,college_name,gender,age,current_semister,branch,total_marks",
    "Naveen,Kumar,Visit Engineering College,male,17,6,C.S.E,900",
    "Preethi,Soodh,St.josh college,female,16,3,M.P.C,600",
    "Sri,Harsith,Andhra University,male,34,5,IT,700",
    "Krithika,Sri,Sri Ramulu Engineering College,female,22,8,Aeronatics,570",
    "Adhi,Mehta,Sai Degree College,male,33,4,Computer Science,850",
    "Amelia,Dyer,Venkateswara University,female,40,3,Msc.Maths,510",
    "William,Morris,Visit Engineering College,male,23,1,Bsc.Maths,490",
    "Judias,Puneeth,Sri Ramulu Engineering College,male,25,3,M.Tech Computers,605",
    "Manjeeth,Chillar,Kite Engineering College,male,33,3,Bsc.Physics,770",
    "Serena,Williams,Adithya College,female,43,1,B.com Computers,876",
    "Rick,Grims,Malla Reddy Engineering College,male,22,7,EEE,564",
    "Krish,kapoor,AKRJ Engineerig College,male,19,2,Petroleum Engineer,640",
    "Pihu,Soodh,St.John College,female,16,2,M.P.C,855",
    "Tarun,Singh,Sri Vasavi Engineering College,male,43,7,Civil,769",
    "Nandini,Dyer,sai Degree College,female,35,3,Bsc.Chemistry,587",
    "Ram,Krishna,Andhra University,male,30,5,Bsc.Chemistry,700",
    "Hema,Sri,sai Degree College,female,24,3,Bsc.Chemistry,587",
    "Honey,Singh,Andhra University,male,30,4,Chemistry,858",
    "Vinod,Kumar,Sri Vasavi Engineering COllege,male,27,5,Msc.Maths,934",
    "Supriya,Kour,sai Degree College,female,33,2,C.S.E,625",
    "Ramya,Manthri,AKRJ Engineering College,female,23,4,Chemistry,988",
    "Ali,Reza,Sri Ramulu Engineering College,male,26,3,850,768",
    "Srikrithi,Mehta,sai Degree College,female,24,2,Msc.Maths,767"
  ];
  answerThirteen: string[] = [
    "first_name,branch,college_name,age,total_marks",
    "William,Bsc.Maths,Visit Engineering College,23,490",
    "Amelia,Msc.Maths,Venkateswara University,40,510",
    "Nandini,Bsc.Chemistry,sai Degree College,35,587",
    "Hema,Bsc.Chemistry,sai Degree College,24,587",
    "Preethi,M.P.C,St.josh college,16,600",
    "Judias,M.Tech Computers,Sri Ramulu Engineering College,25,605",
    "Sandeep,Civil,Kite Engineering College,19,650",
    "Deepika,E.C.E,St.John College,21,650",
    "Sri,IT,Andhra University,34,700",
    "Ram,Bsc.Chemistry,Andhra University,30,700",
    "Ali,850,Sri Ramulu Engineering College,26,768",
    "Manjeeth,Bsc.Physics,Kite Engineering College,33,770",
    "Serena,B.com Computers,Adithya College,43,876",
    "Vinod,Msc.Maths,Sri Vasavi Engineering COllege,27,934",
    "Amritha,Chemistry,Sri Vasavi Engineering College,26,945",
    "Sweety,Bi.P.C,Sasi College,18,980"

  ];
  answerFourteen: string[] = [
    "roll_number,first_name,last_name,gender,age,total_marks,college_name,grade,branch,current_semister",
    "5,Krithika,Sri,female,22,570,Sri Ramulu Engineering College,E,Aeronatics,8",
    "6,Adhi,Mehta,male,33,850,Sai Degree College,B,Computer Science,4",
    "8,William,Morris,male,23,490,Visit Engineering College,E,Bsc.Maths,1",
    "11,Amritha,Rao,female,26,945,Sri Vasavi Engineering College,A,Chemistry,1",
    "15,Rick,Grims,male,22,564,Malla Reddy Engineering College,E,EEE,7",
    "23,Subham,Kapoor,male,26,890,Kite Engineering College,B,Msc.Maths,2",
    "25,Honey,Singh,male,30,858,Andhra University,B,Chemistry,4",
    "26,Vinod,Kumar,male,27,934,Sri Vasavi Engineering COllege,A,Msc.Maths,5",
    "28,Ramya,Manthri,female,23,988,AKRJ Engineering College,A,Chemistry,4",
    "29,Ali,Reza,male,26,768,Sri Ramulu Engineering College,B,850,3",
    "30,Srikrithi,Mehta,female,24,767,sai Degree College,B,Msc.Maths,2"

  ];

  mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  constructor(mediamap:MediaMySqlMapData) { 
    this.elementId2 = "one";
    this.elementId = "question1"; 
    this.audioData = mediamap.mediaData.Operators.Student_Operators.audio;
    this.videoData = mediamap.mediaData.Operators.Student_Operators.video;
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

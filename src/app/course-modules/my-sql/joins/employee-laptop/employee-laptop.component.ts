import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-laptop',
  templateUrl: './employee-laptop.component.html',
  styleUrls: ['./employee-laptop.component.scss']
})
export class EmployeeLaptopComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  JsonData: any;

  elementId: string;
  elementId2: string;

  answerOne: string[] = [
    "emp_id,emp_name,salary,joining_date,lap_id,lap_name,lap_model,lap_warranty,emp_id",
    "10,Sri Divya,50000,2019-10-01,1,Dell,XPS15,2024-10-02,10",
    "9,Hari Kiran,50000,2014-09-11,2,Lenovo,ThinkPad X12,2027-07-07,9",
    "8,Sri Harsha,60000,2017-09-21,3,MSI,GS66 Stealth,2018-10-12,8",
    "13,Mohan Krishna,50000,2018-04-23,4,Samsung,Book 360,2030-02-02,13",
    "15,Tony Edward,20000,2023-02-24,5,Apple,Macbook Air,2025-04-05,15",
    "6,Brinda Mehta,85000,2012-01-05,6,HP,Spectre x360 13.5,2016-04-22,6",
    "5,Pooja Kapoor,70000,2019-10-11,7,Acer,ConceptD 7 Ezel,2023-12-01,5",
    "3,Neelima Chowdary,90000,2015-12-01,8,Fujitsu,UH-X 4ZR1K06212,2018-02-21,3",
    "2,Sandeep DUll,40000,2019-01-01,9,LG,gram 17,2022-12-12,2",
    "1,Rajendra Kumar,90000,2012-05-02,10,Microsoft,Surface Pro 8,2027-01-18,1",
    "16,Preethi,30000,2022-05-02,14,Dell,XPS13,2024-03-12,16",
    "20,Prakash,30000,2023-02-24,15,Asus,ZenBook Pro 16X,2016-05-18,20",
    "19,Greeshma,90000,2013-10-10,16,Razer,Book 13,2024-12-22,19",
    "17,Kavya,55000,2019-02-02,17,lenovo,ThinkPad X1 Nano,2024-12-22,17"

  ];
  answerTwo: string[] = [
    "emp_id,emp_name,salary,joining_date,lap_id,lap_name,lap_model,lap_warranty,emp_id",
    "1,Rajendra Kumar,90000,2012-05-02,10,Microsoft,Surface Pro 8,2027-01-18,1",
    "2,Sandeep DUll,40000,2019-01-01,9,LG,gram 17,2022-12-12,2",
    "3,Neelima Chowdary,90000,2015-12-01,8,Fujitsu,UH-X 4ZR1K06212,2018-02-21,3",
    "4,Shiv Kumar,25000,2022-11-11,,,,,",
    "5,Pooja Kapoor,70000,2019-10-11,7,Acer,ConceptD 7 Ezel,2023-12-01,5",
    "6,Brinda Mehta,85000,2012-01-05,6,HP,Spectre x360 13.5,2016-04-22,6",
    "7,John Robert,30000,2021-02-12,,,,,",
    "8,Sri Harsha,60000,2017-09-21,3,MSI,GS66 Stealth,2018-10-12,8",
    "9,Hari Kiran,50000,2014-09-11,2,Lenovo,ThinkPad X12,2027-07-07,9",
    "10,Sri Divya,50000,2019-10-01,1,Dell,XPS15,2024-10-02,10",
    "11,Thomas Edward,85000,2016-02-03,,,,,",
    "12,Swetha Kapoor,30000,2022-05-01,,,,,",
    "13,Mohan Krishna,50000,2018-04-23,4,Samsung,Book 360,2030-02-02,13",
    "14,Smrithi Kour,95000,2010-03-02,,,,,",
    "15,Tony Edward,20000,2023-02-24,5,Apple,Macbook Air,2025-04-05,15",
    "16,Preethi,30000,2022-05-02,14,Dell,XPS13,2024-03-12,16",
    "17,Kavya,55000,2019-02-02,17,lenovo,ThinkPad X1 Nano,2024-12-22,17",
    "18,Gopi,65000,2018-12-12,,,,,",
    "19,Greeshma,90000,2013-10-10,16,Razer,Book 13,2024-12-22,19",
    "20,Prakash,30000,2023-02-24,15,Asus,ZenBook Pro 16X,2016-05-18,20"

  ];
  answerThree: string[] = [
    "emp_id,emp_name,salary,joining_date,lap_id,lap_name,lap_model,lap_warranty,emp_id",
    "10,Sri Divya,50000,2019-10-01,1,Dell,XPS15,2024-10-02,10",
    "9,Hari Kiran,50000,2014-09-11,2,Lenovo,ThinkPad X12,2027-07-07,9",
    "8,Sri Harsha,60000,2017-09-21,3,MSI,GS66 Stealth,2018-10-12,8",
    "13,Mohan Krishna,50000,2018-04-23,4,Samsung,Book 360,2030-02-02,13",
    "15,Tony Edward,20000,2023-02-24,5,Apple,Macbook Air,2025-04-05,15",
    "6,Brinda Mehta,85000,2012-01-05,6,HP,Spectre x360 13.5,2016-04-22,6",
    "5,Pooja Kapoor,70000,2019-10-11,7,Acer,ConceptD 7 Ezel,2023-12-01,5",
    "3,Neelima Chowdary,90000,2015-12-01,8,Fujitsu,UH-X 4ZR1K06212,2018-02-21,3",
    "2,Sandeep DUll,40000,2019-01-01,9,LG,gram 17,2022-12-12,2",
    "1,Rajendra Kumar,90000,2012-05-02,10,Microsoft,Surface Pro 8,2027-01-18,1",
    ",,,,11,Dell,XPS17,2017-08-16,",
    ",,,,12,Asus,ZenBook Pro 16X,2015-07-10,",
    ",,,,13,Razer,Book 14,2024-12-22,",
    "16,Preethi,30000,2022-05-02,14,Dell,XPS13,2024-03-12,16",
    "20,Prakash,30000,2023-02-24,15,Asus,ZenBook Pro 16X,2016-05-18,20",
    "19,Greeshma,90000,2013-10-10,16,Razer,Book 13,2024-12-22,19",
    "17,Kavya,55000,2019-02-02,17,lenovo,ThinkPad X1 Nano,2024-12-22,17",
    ",,,,18,Asus,ROG Zephyrus G14,2021-06-17,"

  ];
  answerFour: string[] = [
    "emp_id,ep_name,salary,joining_date",
    "4,Shiv Kumar,25000,2022-11-11",
    "7,John Robert,30000,2021-02-12",
    "11,Thomas Edward,85000,2016-02-03",
    "12,Swetha Kapoor,30000,2022-05-01",
    "14,Smrithi Kour,95000,2010-03-02",
    "18,Gopi,65000,2018-12-12"

  ];
  answerFive: string[] = [
    "lap_id,lap_name,lap_model,lap_warranty,emp_id",
    "11,Dell,XPS17,2017-08-16,",
    "12,Asus,ZenBook Pro 16X,2015-07-10,",
    "13,Razer,Book 14,2024-12-22,",
    "18,Asus,ROG Zephyrus G14,2021-06-17,"

  ];
  answerSix: string[] = [
    "emp_id,emp_name,salary,joining_date,lap_id,lap_name,lap_model,lap_warranty,emp_id",
    "8,Sri Harsha,60000,2017-09-21,3,MSI,GS66 Stealth,2018-10-12,8",
    "6,Brinda Mehta,85000,2012-01-05,6,HP,Spectre x360 13.5,2016-04-22,6",
    "5,Pooja Kapoor,70000,2019-10-11,7,Acer,ConceptD 7 Ezel,2023-12-01,5",
    "3,Neelima Chowdary,90000,2015-12-01,8,Fujitsu,UH-X 4ZR1K06212,2018-02-21,3",
    "2,Sandeep DUll,40000,2019-01-01,9,LG,gram 17,2022-12-12,2",
    "20,Prakash,30000,2023-02-24,15,Asus,ZenBook Pro 16X,2016-05-18,20"

  ];
  answerSeven: string[] = [
    "emp_id,emp_name,salary,joining_date,lap_id,lap_name,lap_model,lap_warranty,emp_id",
    "10,Sri Divya,50000,2019-10-01,1,Dell,XPS15,2024-10-02,10",
    "9,Hari Kiran,50000,2014-09-11,2,Lenovo,ThinkPad X12,2027-07-07,9",
    "6,Brinda Mehta,85000,2012-01-05,6,HP,Spectre x360 13.5,2016-04-22,6",
    "16,Preethi,30000,2022-05-02,14,Dell,XPS13,2024-03-12,16",
    "17,Kavya,55000,2019-02-02,17,lenovo,ThinkPad X1 Nano,2024-12-22,17"

  ];
  answerEight: string[] = [
    "lap_name,count(e.emp_id)",
    "Dell,2",
    "Lenovo,2",
    "MSI,1",
    "Samsung,1",
    "Apple,1",
    "HP,1",
    "Acer,1",
    "Fujitsu,1",
    "LG,1",
    "Microsoft,1",
    "Asus,1",
    "Razer,1"

  ];
  answerNine: string[] = [];
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
    this.toggleOn = false;
    this.buttonValue = "Show Answer";
  }
  mainTab(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
  constructor() {
    this.elementId2 = "one";
    this.elementId = "question1";
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

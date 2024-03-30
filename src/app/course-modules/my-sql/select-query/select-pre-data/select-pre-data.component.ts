import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-pre-data',
  templateUrl: './select-pre-data.component.html',
  styleUrls: ['./select-pre-data.component.scss']
})
export class SelectPreDataComponent implements OnInit {

  elementId: string;
  employeeQueries: string[] = [
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(1,'Rajendra','Kumar','Mallina','CEO',1000000,'Male',26,true,'Maxima Encode', 3453534,4589762);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(2,' Edward','Russell','Ayrton','Software Engineer',100000,'Male',26,true,'Intel Technologies', 1234567,1234566);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(3,'Neelima','Chowdary','Gutta','Trainee',25000,'Female',21,true,'Divis', 6362474, 6238645);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(4,'Shiva','Kumar','Selvanan','Manager',200000,' Male',30,true,'Vsoft Technologies', 5555344,5324213);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(5,'Priya','Soodh','Kapoor','Actress',700000,'Female',32,true,'Tseries', 7326364,7123456);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(6,'Sai','Ruchitha',' Atmakuri','junior Software Engineer',30000,'Female',24,false,'Tcs', 23456756,2345665);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(7,'John','Robert','Mortimer','Web Developer',60000,'Male',25,true,'Intense Tehnologies', 3456723,3456764);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(8,'Sri','Divya','Kothapalli','Team Lead',70000,'Female',28,false,' Synoric', 1874567,1876487);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(9,'Swetha','Kumari','Pasala','Software Engineer', 20000,'Female',22, false,'Wipro',3456743,3456234);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(10,'Sri','Latha','Basani','Team Lead',80000,'Female',28,true,' Synoric',1874521 ,1876475);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(11,'Thomas','Edward','collcutt','Sr.Manager',10000,'Male',25,true,'Infosys', 2345679,2345345);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(12,'smrithi','kour','Kothapalli','Web developer',30000,'Female',22 ,true,'Wipro',1872267,1873387);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(13,'Satya','krishna','Basani','Software Engineer',70000,' Female',26,true,' Synoric',1875521,1346475);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(14,'Tony','Edward','collcutt',' Manager',900000,'Female',25 ,false,'Infosys',2345679,2655345);",
    "insert into employee(id,first_name,middle_name,last_name,designation, salary,gender,age,isactive,companyname,primaryphonenumber,secondaryphonenumber)values(15,'Swetha','Sri',' kapoor','web developer',40000,' Female',23, true,'Wipro', 8772267,8756489);"
  ];

  studentQueries: string[] = [
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(1,'Heera','Chowdary','Mullapudi','Male',20,134569845665,80.5,'Sasi Engineering College','A','CSE');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(2,'Naveen','Kumar','Elaganti','Male',21,137669845622,65.5,'Sri Ramulu Engineering College','C','ECE');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(3,'Preethi','Soodh','Kapoor','Female',21,134569849845,75,'Sasi Engineering College','B','CSE');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(4,'Sandeep','kishan','Dull','Male',22,123487698456,55.30,'Sasi Engineering College','D','ECE');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(5,'Krithika','Sri','Mehtha','Female',21,134569842341,45,'Sasi Engineering College','F','IT');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(6,'Amelia','Dyer','Doss','Female',22,134569845612,95,'St.Marry Engineering College','O','Civil');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(7,'William','Morris','Dyer','Male',21,134587468456,60,'visit Engineering College','D','Civil');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(8,'Judias','Buenoano','Puneeth','Female',21,134569882764,75.67,'Kite Engineering College','B','Pharma');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(9,'Deepak','Nivas','Hooda','Male',22,134598768456,88,'Visit Engineering College','A','Pharma');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(10,'Naveen','Kumar','Mehtha','Male',21,134587768456,49,'visit Engineering College','F','Civil');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(11,'Amritha','Rao','Dyer','Female',22,133569882764,67,'Kite Engineering College','C','Pharma');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(12,'Deepak','kumar','Dull','Male',21,134888768456, 88,'Sasi Engineering College','A','Civil');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(13,'Serena','William','singh','Female',21,134587468444,77,'Sri Venkateswara Engineering College' ,'B','Civil');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(14,'Rick','Grims','Dutth','Male',22,134569882264,52.40,'Malla Reddy Engineering College','C','Mech');",
    "insert into student(id,first_name,middle_name,last_name,gender,age, aadharNumber,percentage,collegeName,grade,branch)values(15,'Prince','Eugene','Carl','Male',22,134598767676, 92,'AKRJ Engineering College','O','Pharma');"

  ];

  constructor() {
    this.elementId = "student";
    this.elementId = "employee";
   
  }

  ngOnInit(): void {
  }

  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
}

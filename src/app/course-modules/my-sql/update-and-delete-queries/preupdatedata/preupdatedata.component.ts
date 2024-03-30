import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preupdatedata',
  templateUrl: './preupdatedata.component.html',
  styleUrls: ['./preupdatedata.component.scss']
})
export class PreupdatedataComponent implements OnInit {

  elementId: string;
  employeeQueries: string[] = [

    "Insert into employee (id ,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(1,'Pardeep','Narwal','male','Software Engineer', 'Intel Technologies',20000,24,1230999884,99887766,'full time','2019-05-02');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,employee_type,joining_date) values(2,'Sandeep','Dull','male','Web Developer','Synoric Technologies', 50000,29,1230999894,'full time','2016-03-19');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(3,'Neelima','Chowdary','female', 'Sr.manager','Maxima Encode', 90000, 40, 1230999877, 99886666,'part time','2001-10-27');",
    "Insert into employee(id,first_name,last_name,gender,company_name, salary,age,bankaccountnumber,primaryphonenumber)values(4,'Shiv','Kumar', 'male','wipro',30000, 22,1230987654,99223456);",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,employee_type,joining_date) values(5,'Priya','Soodh','female','Team Lead','Tcs',55000,30,1234565432, 'part time','2013-09-20');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(6,'Sai','Ruchitha','female','Sr.Manager', 'Vsoft Technologies',80000,35,1231231234,99876598,'full time','2007-11-11');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber)values(7,'John','Robert','unknown','trainee','wipro',15000,22,1234123412,99997777);",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(8,'Sri','Divya','female', 'H.R','Argano technologies',45000,28,1234567890,98765432,'full time','2018-02-01');",
    "Insert into employee(Id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber ,employee_type,joining_date) values(9,'Rishank','Devadiga','male','Associate Manager','Infosys',75000, 32,1234554321,'full time','2010-06-05');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(10,'Ram','Kapoor','male','Software Engineer','Intense Technologies',88000,38,1234567231,98765478,'full time','2008-10-10');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(11,'Sai','Latha','female','Associate Engineer', 'Tech Manhindra',35000,27,1234567895,99887722,'full time', '2018-05-10');",
    "Insert into employee(Id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,employee_type)values (12,'Thomas','Edward','unknown','Jr.Engineer','Synoric Technologies',40000,29,1230981231,'full time');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(13,'Smrithi','Kour','female','Web Developer', 'Tesla Technologies',75000,37,1230099880,99995559,'full time','2005-10-02');",
    "Insert into employee(id,first_name,last_name,gender,company_name, Salary,age,bankaccountnumber,primaryphonenumber,employee_type) values(14,'Mohan','Krishna','male','Intel Technologies', 30000,23,1234998874,99442647,'full time');",
    "Insert into employee(Id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(15,'Tony','Edward','unknown','Manager', 'Tcs',95000,40,1234509876,98723456,'full time','2005-01-27');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, joining_date)values(16,'Swetha','Kapoor','male','Web Developer','Wipro',65000, 32,1230987653,98732187,'2011-02-28');",
    "Insert into employee(id,first_name,last_name,gender,company_name, salary,age,bankaccountnumber,primaryphonenumber,employee_type)values (17,'Usha','Sri','female','Express Pvt ltd',18000,22,1289787435,99552891, 'full time');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(18,'Narender','Hoshiyar','male','Application Developer','Ey technologies',65000,33,1230099007,99123999,'full time', '2009-02-10');",
    "Insert into Employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,employee_type,joining_date) values(19,'Clistofer','butt','unknown','Sr.Developer','West Agile',45000,25,1234098726,'part time','2017-02-18');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(20,'Brinda','Mehta','female','Web Designer', 'Walking Tree Technologies',80000,36,1230034567,98217289,'full time','2006-03-19');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, employee_type,joining_date)values(21,'Vamsi','Krishna','male','Software Engineer','Intel Technologies',50000,26,1230044567,98217289,'part time','2016-03-19');",
    "Insert into employee(id,first_name,last_name,gender,company_name, salary,age,bankaccountnumber,primaryphonenumber)values(22,'Neethu', 'Chopra','female','Wipro',10000,26,1234444567,92227289);",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, joining_date)values(23,'Mahitha','Sushma','female','Software Engineer','Synoric Technologies',75000,31,1000044567,98212332,'2012-05-23');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber) values(24,'Anup','Kumar','male','Associate Manager','Intel Technologies', 95000,34,123223347,91117289);",
    "Insert into employee(id,first_name,last_name,gender,company_name, salary,age,bankaccountnumber,primaryphonenumber,employee_type)values (25,'Prasanth','Roy','male','wipro',8000,22,1255554567,99917299,'part time');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, joining_date)values(26,'Sri','Valli','female','Software Engineer','Synoric Technologies',8000,29,122299927,99932399,'2014-10-12');",
    "Insert into employee(id,first_name,last_name,gender,designation, company_name,salary,age,bankaccountnumber,primaryphonenumber, joining_date)values(27,'Sri','Valli','female','Sr.Manager','Intense Technologies', 60000,33,133399927,98882399,'2012-12-17');",
    "Insert into employee(id,first_name,last_name,gender,company_name, salary,age,bankaccountnumber,primaryphonenumber,joining_date)values(28, 'Karthik','Singh','male','Synoric Technologies',25000,23,144399927,98882399, '2022-12-17');",
    "Insert into employee(id,first_name,last_name,gender,company_name, salary,age,bankaccountnumber,primaryphonenumber,joining_date)values(29, 'Anitha','Dull','female','Tcs',30000,22,149349927,98767989,'2021-01-01');"
  ];
  studentQueries: string[] = [
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(1,'Naveen','Kumar', 'male',17,900,'Visit Engineering College','A','C.S.E',6);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(2,'Preethi','Soodh', 'female',16,600,'St.josh college','D','M.P.C',3);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(3,'Sri','Harsith','male',34, 700,'Andhra University','C','IT',5);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(4,'Sandeep','Kishan', 'male',19,650,'Kite Engineering College','D','Civil',3);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(5,'Krithika','Sri','female', 22,570,'Sri Ramulu Engineering College','E','Aeronatics',8);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(6,'Adhi','Mehta','male',33, 850,'Sai Degree College','B','Computer Science',4);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(7,'Amelia','Dyer','female',40, 510,'Venkateswara University','C','Msc.Maths',3);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch)values(8,'William','Morris','male',23,490,'Visit Engineering College','E','Bsc.Maths');",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(9,'Judias','Puneeth','male', 25,605,'Sri Ramulu Engineering College','D','M.Tech Computers',3);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(10,'Rohit','Kumar','male', 20,930,'Andhra University','A','civil',7);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch)values(11,'Amritha','Rao','female',26,945,'Sri Vasavi Engineering College','A','Chemistry');",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(12,'Deepika','Singh', 'female',21,650,'St.John College','D','E.C.E',5);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(13,'Manjeeth','Chillar', 'male',33,770,'Kite Engineering College','C','Bsc.Physics',3);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch)values(14,'Serena','Williams','female',43,876, 'Adithya College','B','B.com Computers');",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(15,'Rick','Grims','male',22,564, 'Malla Reddy Engineering College','E','EEE',7);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(16,'Krish','kapoor','male',19, 640,'AKRJ Engineerig College','D','Petroleum Engineer',2);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch)values(17,'Sweety','dutt','female',18,980,'Sasi College','A','Bi.P.C');",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(18,'Pihu','Soodh','female', 16,855,'St.John College','B','M.P.C',2);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(19,'Tarun','Singh','male', 43,769,'Sri Vasavi Engineering College','C','Civil',7);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(20,'Nandini','Dyer', 'female',35,587,'sai Degree College','D','Bsc.Chemistry',3);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(21,'Sri','Priya','female', 26,650,'Kite Engineering College','D','C.S.E',4);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(22,'Ram','Krishna','male', 30,700,'Andhra University','c','Bsc.Chemistry',5);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(23,'Subham','Kapoor', 'male',26,890,'Kite Engineering College','B','Msc.Maths',2);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(24,'Hema','Sri','female', 24,587,'sai Degree College','c','Bsc.Chemistry',3);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(25,'Honey','Singh','male', 30,858,'Andhra University','B','Chemistry',4);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(26,'Vinod','Kumar','male', 27,934,'Sri Vasavi Engineering COllege','A','Msc.Maths',5);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(27,'Supriya','Kour', 'female',33,625,'sai Degree College','D','C.S.E',2);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(28,'Ramya','Manthri', 'female',23,988,'AKRJ Engineering College','A','Chemistry',4);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(29,'Ali','Reza','male', 26,768,'Sri Ramulu Engineering College','B','Chemistry',3);",
    "Insert into student(roll_number,first_name,last_name,gender,age,total_marks, college_name,grade,branch,current_semister)values(30,'Srikrithi','Mehta', 'female',24,767,'sai Degree College','B','Msc.Maths',2);"
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-data',
  templateUrl: './pre-data.component.html',
  styleUrls: ['./pre-data.component.scss']
})
export class PreDataComponent implements OnInit {

  elementId: string;
  employeeQueries: string[] = [
    "insert into employee(emp_id, emp_name, salary, joining_date) values(1,'Rajendra Kumar',90000,'2012-05-02');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(2,'Sandeep DUll',40000,'2019-01-01');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(3,'Neelima Chowdary',90000,'2015-12-01');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(4,'Shiv Kumar',25000,'2022-11-11');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(5,'Pooja Kapoor',70000,'2019-10-11');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(6,'Brinda Mehta',85000,'2012-01-05');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(7,'John Robert',30000,'2021-02-12');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(8,'Sri Harsha',60000,'2017-09-21');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(9,'Hari Kiran',50000,'2014-09-11');",
    "nsert into employee(emp_id, emp_name, salary, joining_date) values(10,'Sri Divya',50000,'2019-10-01');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(11,'Thomas Edward',85000,'2016-02-03');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(12,'Swetha Kapoor',30000,'2022-05-01');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(13,'Mohan Krishna',50000,'2018-04-23');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(14,'Smrithi Kour',95000,'2010-03-02');",
    "insert into employee(emp_id, emp_name, salary) values(15,'Tony Edward',20000);",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(16,'Preethi',30000,'2022-05-02');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(17,'Kavya',55000,'2019-02-02');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(18,'Gopi',65000,'2018-12-12');",
    "insert into employee(emp_id, emp_name, salary, joining_date) values(19,'Greeshma',90000,'2013-10-10');",
    "insert into employee(emp_id, emp_name, salary) values(20,'Prakash',30000);"
  ];

  laptopQueries: string[] = [
    "insert into laptop(lap_id,lap_name, lap_model,lap_warranty,emp_id) values(1,'Dell','XPS15','2024-10-02', 10);",
    "insert into laptop(lap_id,lap_name, lap_model,lap_warranty,emp_id) values(2,'Lenovo','ThinkPad X12','2027-07-07', 9);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(3, 'MSI', 'GS66 Stealth', '2018-10-12', 8); ",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(4, 'Samsung', 'Book 360', '2030-02-02', 13);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(5, 'Apple', 'Macbook Air', '2025-04-05', 15);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(6, 'HP', 'Spectre x360 13.5', '2016-04-22', 6);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(7, 'Acer', 'ConceptD 7 Ezel', '2023-12-01', 5);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(8, 'Fujitsu', 'UH-X 4ZR1K06212', '2018-02-21', 3);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(9, ' LG', 'gram 17', '22-12-12', 2);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(10, 'Microsoft', 'Surface Pro 8', '2027-01-18', 1);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty) values(11, 'Dell', 'XPS17', '2017-08-16');",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty) values(12, 'Asus', 'ZenBook Pro 16X', '2015-07-10');",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty) values(13, 'Razer', 'Book 14', '2024-12-22');",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(14, 'Dell', 'XPS13', '2024-03-12', 16);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(15, 'Asus', 'ZenBook Pro 16X', '2016-05-18', 20);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(16, 'Razer', 'Book 13', '2024-12-22', 19);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty, emp_id) values(17, 'lenovo', 'ThinkPad X1 Nano', '2024-12-22', 17);",
    "insert into laptop(lap_id, lap_name, lap_model, lap_warranty) values(18, 'Asus', 'ROG Zephyrus G14', '2021-06-17');",
  ];

  countryQueries: string[] = [
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('India',1415681359,'Ganga','rice',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('China',1453932069,'Yangtze','rice',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Nepal',30579216,'Koshi','Tobacco',False);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Japan',125459537,'Shinano','Rice',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Brazil',216527662,'Amazon','Soybean',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Indonesia',281121689,'Kapuas','palm oil',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Egypt',107407211,'Nile','Wheat',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Butan',793928,'Drangme Chhu','Soya Beans',False);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Saudi Arabia',36238583,'Wadi al-Rummah','watermelon',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Germany', 84488027,'Danube','Barley',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Thailand',70259783,'Chao Phraya','Cassava',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Russia',146098876,'Lena','potatoes',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Zimbabwe',15430850,'Zambezi',' Corn',False);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Canada',38611350,'Yukon','Maize',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Sweden',10264641,'Gota alv—Klaralven',' Cereals',True);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Serbia',8644561,'Danube',' Sunflower',False);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Austria',9142045,'Danube',' Wheat',False);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Kazakhasthan',19369834,'Irtysh',' Wheat',False);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Bulgaria', 6810563,'Danube',' Maize',False);",
    "insert into country(country_name,population,largest_river,main_crop,isSeaShore) values('Kosovo',1770003,'Drini',' Wheat',False);"
  ];

  capitalQueries: string[] = [
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Delhi',32941000,False,'1483 sq.kms','India');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('beijing',21766000,False,'16,410.5 sq.kms','China');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Tokyo',37194000,True,'2,194 sq.kms','Japan');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Brasilia',4728000,True,'5,802 sq.kms','Brazil');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Jakarta',11075000,True,'661.5 sq.kms','Indonesia');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Cairo',22183000,False,'453 sq.kms','Egypt');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Riyadh',9058394,False,'1973 sq.kms','Saudi Arabia');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Berlin',3571000,False,'891.8 sq.kms','Germany');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Bangkok',10539000,True,'1,568.7 sq.kms','Thailand');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Moscow',12680000,True,'2,511 sq.kms','Russia');",
    "insert into capital(capital_name,population,isSeaShore,area) values('Islamabad',1232000,True,'906.5 sq.kms');",
    "insert into capital(capital_name,population,isSeaShore,area) values('Kabul',6760500,False,'1,023 sq km');",
    "insert into capital(capital_name,population,isSeaShore,area) values('Seoul',9988000,False,'605.2 sq.kms');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Belgrade',1408000,False,'360 sq.kms','Serbia');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Vienna',1975000,False,'414.6 sq.kms','Austria');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Astana',1291000,False,'722 sq.kms','Kazakhasthan');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Sofia',1288000,False,'492 sq.kms','Bulgaria');",
    "insert into capital(capital_name,population,isSeaShore,area,country_name) values('Pristina',1768000,False,'572 sq.kms','Kosovo');"
  ];

  apartmentQueries: string[] = [
    "insert into Apartment values('1A','Santhi Nilayam', 8,'east','2',False);",
    "insert into Apartment values('2A','Adithya', 12,'west','2',False);",
    "insert into Apartment values('3A','Blue Sky', 12,'north','2',True);",
    "insert into Apartment values('4A','Divine rentals', 16,'south','2',True);",
    "insert into Apartment values('5A','Sunshine', 16,'west','2',True);",
    "insert into Apartment values('6A','Green House', 16,'east','2',True);"
  ];

  flatQueries: string[] = [
    "insert into flat values ('1A-101','Rajendra Kumar',3,'east',1,FALSE,'1A');",
    "insert into flat values ('1A-102','Kranthi',2,'east',1,FALSE,'1A');",
    "insert into flat values ('1A-103','Sasidhar',2,'west',1,TRUE,'1A');",
    "insert into flat values ('1A-104','Sri Vidya',1,'south',1,FALSE,'1A');",
    "insert into flat values ('1A-201','Nakul Mehta',1,'east',2,FALSE,'1A');",
    "insert into flat values ('1A-202','Rishank',1,'east',2,TRUE,'1A');",
    "insert into flat values ('1A-203','Sandeep Dull',3,'north',2,FALSE,'1A');",
    "insert into flat values ('1A-204','Krishna',2,'south',2,TRUE,'1A' );",
    "insert into flat values ('2A-101','Narendar',1,'west',1,TRUE,'2A' );",
    "insert into flat values ('2A-102','Krithi',2,'east',1,FALSE,'2A' );",
    "insert into flat values ('2A-103','Sandhya',2,'north',1,FALSE,'2A' );",
    "insert into flat values ('2A-104','Srinivas',3,'south',1,FALSE,'2A' );",
    "insert into flat values ('2A-201','Rambabu',3,'west',2,FALSE,'2A' );",
    "insert into flat values ('2A-202','Swetha',3,'west',2,FALSE,'2A' );",
    "insert into flat values ('2A-203','Prathik',2,'south',2,TRUE,'2A' );",
    "insert into flat values ('2A-204','Meghana',1,'south',2,FALSE,'2A' );",
    "insert into flat values ('2A-301','Thomas',2,'east',3,FALSE,'2A' );",
    "insert into flat values ('2A-302','Trinadh',2,'west',3,FALSE,'2A');",
    "insert into flat values ('2A-303','Santosh',1,'south',3,TRUE,'2A' );",
    "insert into flat values ('2A-304','Gayatri',3,'north',3,FALSE,'2A' );",
    "insert into flat values ('3A-101','Bhuvan',2,'north',1,FALSE,'3A' );",
    "insert into flat values ('3A-102','Chandana',2,'south',1,FALSE,'3A' );",
    "insert into flat values ('3A-103','Eshwar',1,'west',1,TRUE,'3A' );",
    "insert into flat values ('3A-104','Harika',3,'south',1,FALSE,'3A' );",
    "insert into flat values ('3A-201','Jagadeesh',3,'north',2,FALSE,'3A' );",
    "insert into flat values ('3A-202','Prakash',2,'east',2,TRUE,'3A' );",
    "insert into flat values ('3A-203','Rashi',3,'west',2,FALSE,'3A' );",
    "insert into flat values ('3A-204','Stella',1,'south',2,FALSE,'3A' );",
    "insert into flat values ('3A-301','Amar',1,'south',3,FALSE,'3A' );",
    "insert into flat values ('3A-302','Brinda',1,'north',3,FALSE,'3A' );",
    "insert into flat values ('3A-303','Satish',3,'north',3,TRUE,'3A' );",
    "insert into flat values ('3A-304','Pratyusha',2,'east',3,FALSE,'3A' );",
    "insert into flat values ('4A-101','Nandini',1,'north',1,FALSE,'4A');",
    "insert into flat values ('4A-102','Bhargavi',2,'south',1,FALSE,'4A' );",
    "insert into flat values ('4A-103','Rakesh',3,'south',1,TRUE,'4A' );",
    "insert into flat values ('4A-104','Anup',1,'east',1,FALSE,'4A' );",
    "insert into flat values ('4A-201','Gautham',2,'west',2,FALSE,'4A' );",
    "insert into flat values ('4A-202','Poojitha',2,'west',2,FALSE,'4A' );",
    "insert into flat values ('4A-203','Pranavi',3,'south',2,FALSE,'4A' );",
    "insert into flat values ('4A-204','Lokesh',1,'south',2,TRUE,'4A' );",
    "insert into flat values ('4A-301','Neelima',3,'south',3,FALSE,'4A' );",
    "insert into flat values ('4A-302','Swaroop',3,'north',3,FALSE,'4A');",
    "insert into flat values ('4A-303','Nagaraj',2,'north',3,FALSE,'4A' );",
    "insert into flat values ('4A-304','Ganesh',1,'west',3,FALSE,'4A' );",
    "insert into flat values ('4A-401','Ragini',1,'north',4,TRUE,'4A' );",
    "insert into flat values ('4A-402','Jashwanth',1,'west',4,FALSE,'4A' );",
    "insert into flat values ('4A-403','Archana',2,'west',4,FALSE,'4A' );",
    "insert into flat values ('4A-404','Pradeep',3,'east',4,FALSE,'4A' );",
    "insert into flat values ('5A-101','Tanish',2,'south',1,TRUE,'5A' );",
    "insert into flat values ('5A-102','Vamsi',1,'west',1,FALSE,'5A');",
    "insert into flat values ('5A-103','Vasavi',3,'east',1,FALSE,'5A' );",
    "insert into flat values ('5A-104','Dinesh',2,'east',1,FALSE,'5A' );",
    "insert into flat values ('5A-201','Ramya',2,'north',2,TRUE,'5A' );",
    "insert into flat values ('5A-202','Irfan',3,'south',2,FALSE,'5A' );",
    "insert into flat values ('5A-203','Tanmayi',3,'north',2,FALSE,'5A' );",
    "insert into flat values ('5A-204','Prachi',1,'west',2,TRUE,'5A' );",
    "insert into flat values ('5A-301','Akhila',1,'north',3,FALSE,'5A' );",
    "insert into flat values ('5A-302','Vinodh',1,'east',3,FALSE,'5A' );",
    "insert into flat values ('5A-303','Likitha',2,'south',3,FALSE,'5A' );",
    "insert into flat values ('5A-304','Radika',3,'west',3,TRUE,'5A' );",
    "insert into flat values ('5A-401','Harini',3,'west',4,FALSE,'5A' );",
    "insert into flat values ('5A-402','Vijay',3,'east',4,FALSE,'5A' );",
    "insert into flat values ('5A-403','Divya',2,'south',4,FALSE,'5A' );",
    "insert into flat values ('5A-404','Sravya',1,'east',4,TRUE,'5A' );",
    "insert into flat values ('6A-101','Vinay',2,'north',1,FALSE,'6A' );",
    "insert into flat values ('6A-102','Roja',2,'west',1,FALSE,'6A' );",
    "insert into flat values ('6A-103','Murali',3,'south',1,FALSE,'6A' );",
    "insert into flat values ('6A-104','Pradeep',1,'west',1,TRUE,'6A' );",
    "insert into flat values ('6A-201','Dharma',2,'east',2,FALSE,'6A' );",
    "insert into flat values ('6A-202','Karthik',3,'east',2,FALSE,'6A' );",
    "insert into flat values ('6A-203','Sruthi',1,'west',2,FALSE,'6A' );",
    "insert into flat values ('6A-204','Akhil',3,'west',2,FALSE,'6A' );",
    "insert into flat values ('6A-301','Hema',2,'north',3,FALSE,'6A' );",
    "insert into flat values ('6A-302','Mallesh',2,'north',3,TRUE,'6A' );",
    "insert into flat values ('6A-303','Harshith',3,'north',3,FALSE,'6A' );",
    "insert into flat values ('6A-304','Sukesh',1,'south',3,FALSE,'6A' );",
    "insert into flat values ('6A-401','Aswini',1,'south',4,FALSE,'6A' );",
    "insert into flat values ('6A-402','Sowjanya',1,'east',4,FALSE,'6A' );",
    "insert into flat values ('6A-403','Pavan',2,'east',4,FALSE,'6A' );",
    "insert into flat values ('6A-404','Kishore',3,'west',4,TRUE,'6A' );"

  ];
  employeedesQueries: string[] = [
    "insert into employee values(1,'Edward Russell','male',100000,'6','M111');",
    "insert into employee values(2,'Neelima Chowdary','female',25000,'1.5','P9900');",
    "insert into employee values(3,'Shiva Kumar','male',40000,'3 ','SE5555');",
    "insert into employee values(4,'Priya Soodh','female',60000,'4.2','F1122');",
    "insert into employee values(5,'Sai Ruchitha','female',42000, '3.7 ','SE5599');",
    "insert into employee values(6,'John Robert','male',34000,'2 ','P9900');",
    "insert into employee values(7,'Sri Divya','female',75000,'5 ','SL1234');",
    "insert into employee values(8,'Swetha Kumari','female',55000,'3 ','SE5599');",
    "insert into employee values(9,'Sri Latha','female',90000,'7 ','M111');",
    "insert into employee values(10,'Sandeep Dull','male',30000,'1 ','SU9999');",
    "insert into employee values(11,'Anup Kumar','male',45000,'2 ','SE5599');",
    "insert into employee values(12,'Prasanth Roy','male',87000,'6','SL1234');",
    "insert into employee values(13,'Tony Edward','male',49000,'4 ','SE5555');",
    "insert into employee values(14,'Brinda Kapoor','female',25000,'1 ','SU9999');",
    "insert into employee values(15,'Prachi Mehta','female',84000,'5 ','F1122');",
    "insert into employee values(16,'Pardeep Narwal','male',98000,'7.5','M111');",
    "insert into employee values(17,'Rajendra Kumar','male',87000,'6 ','F1122');",
    "insert into employee values(18,'Smrithi Kour','female',40000,'2.10 ','P9900');"

  ];

  designationQueries: string[] = [
    "insert into designation values('M111','Manager','Non Technical');",
    "insert into designation values('SE5599','Software Engineer','Technical');",
    "insert into designation values('F1122','Cloud sales Finance Lead','Finance');",
    "insert into designation values('SE5555','Technical Support','Technical');",
    "insert into designation values('SU9999','Voice Process','support');",
    "insert into designation values('SL1234','Team Lead','Technical');",
    "insert into designation values('P9900','Payrole Analyst','Finance');"

  ]

  constructor() {
    this.elementId = "one";
  }

  ngOnInit(): void {
  }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
}

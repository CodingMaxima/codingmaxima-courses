import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartment-flat',
  templateUrl: './apartment-flat.component.html',
  styleUrls: ['./apartment-flat.component.scss']
})
export class ApartmentFlatComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  JsonData: any;

  elementId: string;
  elementId2: string;
  answerOne: string[] = [
    "flat_id,owner_name,no_bedrooms,facing,floor,isAvailable,apartment_id,apartment_id,apartment_name,no_flats,facing,no_floors,isLift",
    "1A-103,Sasidhar,2,west,1,1,1A,1A,Santhi Nilayam,8,east,2,0",
    "1A-202,Rishank,1,east,2,1,1A,1A,Santhi Nilayam,8,east,2,0",
    "1A-204,Krishna,2,south,2,1,1A,1A,Santhi Nilayam,8,east,2,0",
    "2A-101,Narendar,1,west,1,1,2A,2A,Adithya,12,west,2,0",
    "2A-203,Prathik,2,south,2,1,2A,2A,Adithya,12,west,2,0",
    "2A-303,Santosh,1,south,3,1,2A,2A,Adithya,12,west,2,0",
    "3A-103,Eshwar,1,west,1,1,3A,3A,Blue Sky,12,north,2,1",
    "3A-202,Prakash,2,east,2,1,3A,3A,Blue Sky,12,north,2,1",
    "3A-303,Satish,3,north,3,1,3A,3A,Blue Sky,12,north,2,1",
    "4A-103,Rakesh,3,south,1,1,4A,4A,Divine rentals,16,south,2,1",
    "4A-204,Lokesh,1,south,2,1,4A,4A,Divine rentals,16,south,2,1",
    "4A-401,Ragini,1,north,4,1,4A,4A,Divine rentals,16,south,2,1",
    "5A-101,Tanish,2,south,1,1,5A,5A,Sunshine,16,west,2,1",
    "5A-201,Ramya,2,north,2,1,5A,5A,Sunshine,16,west,2,1",
    "5A-204,Prachi,1,west,2,1,5A,5A,Sunshine,16,west,2,1",
    "5A-304,Radika,3,west,3,1,5A,5A,Sunshine,16,west,2,1",
    "5A-404,Sravya,1,east,4,1,5A,5A,Sunshine,16,west,2,1",
    "6A-104,Pradeep,1,west,1,1,6A,6A,Green House,16,east,2,1",
    "6A-302,Mallesh,2,north,3,1,6A,6A,Green House,16,east,2,1",
    "6A-404,Kishore,3,west,4,1,6A,6A,Green House,16,east,2,1"
  ];
  answerTwo: string[] = [
    "apartment_id,partment_name,no-floors,facing,no_floors,isLift,flat_id,owner_name,no_bedrooms,facing,floor,isAvailable,apartment_id",
    "1A,Santhi Nilayam,8,east,2,0,1A-101,Rajendra Kumar,3,east,1,0,1A",
    "1A,Santhi Nilayam,8,east,2,0,1A-102,Kranthi,2,east,1,0,1A",
    "1A,Santhi Nilayam,8,east,2,0,1A-103,Sasidhar,2,west,1,1,1A",
    "1A,Santhi Nilayam,8,east,2,0,1A-104,Sri Vidya,1,south,1,0,1A",
    "1A,Santhi Nilayam,8,east,2,0,1A-201,Nakul Mehta,1,east,2,0,1A",
    "1A,Santhi Nilayam,8,east,2,0,1A-202,Rishank,1,east,2,1,1A",
    "1A,Santhi Nilayam,8,east,2,0,1A-203,Sandeep Dull,3,north,2,0,1A",
    "1A,Santhi Nilayam,8,east,2,0,1A-204,Krishna,2,south,2,1,1A",
    "6A,Green House,16,east,2,1,6A-101,Vinay,2,north,1,0,6A",
    "6A,Green House,16,east,2,1,6A-102,Roja,2,west,1,0,6A",
    "6A,Green House,16,east,2,1,6A-103,Murali,3,south,1,0,6A",
    "6A,Green House,16,east,2,1,6A-104,Pradeep,1,west,1,1,6A",
    "6A,Green House,16,east,2,1,6A-201,Dharma,2,east,2,0,6A",
    "6A,Green House,16,east,2,1,6A-202,Karthik,3,east,2,0,6A",
    "6A,Green House,16,east,2,1,6A-203,Sruthi,1,west,2,0,6A",
    "6A,Green House,16,east,2,1,6A-204,Akhil,3,west,2,0,6A",
    "6A,Green House,16,east,2,1,6A-301,Hema,2,north,3,0,6A",
    "6A,Green House,16,east,2,1,6A-302,Mallesh,2,north,3,1,6A",
    "6A,Green House,16,east,2,1,6A-303,Harshith,3,north,3,0,6A",
    "6A,Green House,16,east,2,1,6A-304,Sukesh,1,south,3,0,6A",
    "6A,Green House,16,east,2,1,6A-401,Aswini,1,south,4,0,6A",
    "6A,Green House,16,east,2,1,6A-402,Sowjanya,1,east,4,0,6A",
    "6A,Green House,16,east,2,1,6A-403,Pavan,2,east,4,0,6A",
    "6A,Green House,16,east,2,1,6A-404,Kishore,3,west,4,1,6A"
  ];
  answerThree: string[] = [
    "flat_id,owner_name,no_bedrooms,facing,floor,isAvailable,apartment_id,apartment_id,apartment_name,no_flats,facing,no_floors,isLif",
    "3A-301,Amar,1,south,3,0,3A,3A,Blue Sky,12,north,2,1",
    "4A-104,Anup,1,east,1,0,4A,4A,Divine rentals,16,south,2,1",
    "3A-204,Stella,1,south,2,0,3A,3A,Blue Sky,12,north,2,1",
    "1A-104,Sri Vidya,1,south,1,0,1A,1A,Santhi Nilayam,8,east,2,0",
    "1A-201,Nakul Mehta,1,east,2,0,1A,1A,Santhi Nilayam,8,east,2,0",
    "1A-202,Rishank,1,east,2,1,1A,1A,Santhi Nilayam,8,east,2,0",
    "2A-204,Meghana,1,south,2,0,2A,2A,Adithya,12,west,2,0",
    "3A-103,Eshwar,1,west,1,1,3A,3A,Blue Sky,12,north,2,1",
    "2A-101,Narendar,1,west,1,1,2A,2A,Adithya,12,west,2,0",
    "4A-204,Lokesh,1,south,2,1,4A,4A,Divine rentals,16,south,2,1",
    "2A-303,Santosh,1,south,3,1,2A,2A,Adithya,12,west,2,0",
    "3A-302,Brinda,1,north,3,0,3A,3A,Blue Sky,12,north,2,1",
    "4A-101,Nandini,1,north,1,0,4A,4A,Divine rentals,16,south,2,1",
    "4A-304,Ganesh,1,west,3,0,4A,4A,Divine rentals,16,south,2,1",
    "4A-401,Ragini,1,north,4,1,4A,4A,Divine rentals,16,south,2,1",
    "4A-402,Jashwanth,1,west,4,0,4A,4A,Divine rentals,16,south,2,1",
    "5A-102,Vamsi,1,west,1,0,5A,5A,Sunshine,16,west,2,1",
    "5A-204,Prachi,1,west,2,1,5A,5A,Sunshine,16,west,2,1",
    "5A-301,Akhila,1,north,3,0,5A,5A,Sunshine,16,west,2,1",
    "5A-302,Vinodh,1,east,3,0,5A,5A,Sunshine,16,west,2,1",
    "6A-203,Sruthi,1,west,2,0,6A,6A,Green House,16,east,2,1",
    "5A-404,Sravya,1,east,4,1,5A,5A,Sunshine,16,west,2,1",
    "6A-104,Pradeep,1,west,1,1,6A,6A,Green House,16,east,2,1",
    "6A-304,Sukesh,1,south,3,0,6A,6A,Green House,16,east,2,1",
    "6A-401,Aswini,1,south,4,0,6A,6A,Green House,16,east,2,1",
    "6A-402,Sowjanya,1,east,4,0,6A,6A,Green House,16,east,2,1",
    "4A-201,Gautham,2,west,2,0,4A,4A,Divine rentals,16,south,2,1",
    "3A-102,Chandana,2,south,1,0,3A,3A,Blue Sky,12,north,2,1",
    "4A-303,Nagaraj,2,north,3,0,4A,4A,Divine rentals,16,south,2,1",
    "1A-102,Kranthi,2,east,1,0,1A,1A,Santhi Nilayam,8,east,2,0",
    "1A-103,Sasidhar,2,west,1,1,1A,1A,Santhi Nilayam,8,east,2,0",
    "2A-103,Sandhya,2,north,1,0,2A,2A,Adithya,12,west,2,0",
    "4A-403,Archana,2,west,4,0,4A,4A,Divine rentals,16,south,2,1",
    "5A-101,Tanish,2,south,1,1,5A,5A,Sunshine,16,west,2,1",
    "1A-204,Krishna,2,south,2,1,1A,1A,Santhi Nilayam,8,east,2,0",
    "5A-104,Dinesh,2,east,1,0,5A,5A,Sunshine,16,west,2,1",
    "5A-201,Ramya,2,north,2,1,5A,5A,Sunshine,16,west,2,1",
    "2A-102,Krithi,2,east,1,0,2A,2A,Adithya,12,west,2,0",
    "3A-101,Bhuvan,2,north,1,0,3A,3A,Blue Sky,12,north,2,1",
    "4A-202,Poojitha,2,west,2,0,4A,4A,Divine rentals,16,south,2,1",
    "5A-303,Likitha,2,south,3,0,5A,5A,Sunshine,16,west,2,1",
    "3A-304,Pratyusha,2,east,3,0,3A,3A,Blue Sky,12,north,2,1",
    "2A-203,Prathik,2,south,2,1,2A,2A,Adithya,12,west,2,0",
    "6A-101,Vinay,2,north,1,0,6A,6A,Green House,16,east,2,1",
    "6A-102,Roja,2,west,1,0,6A,6A,Green House,16,east,2,1",
    "2A-301,Thomas,2,east,3,0,2A,2A,Adithya,12,west,2,0",
    "6A-201,Dharma,2,east,2,0,6A,6A,Green House,16,east,2,1",
    "5A-403,Divya,2,south,4,0,5A,5A,Sunshine,16,west,2,1",
    "6A-301,Hema,2,north,3,0,6A,6A,Green House,16,east,2,1",
    "6A-302,Mallesh,2,north,3,1,6A,6A,Green House,16,east,2,1",
    "2A-302,Trinadh,2,west,3,0,2A,2A,Adithya,12,west,2,0",
    "4A-102,Bhargavi,2,south,1,0,4A,4A,Divine rentals,16,south,2,1",
    "3A-202,Prakash,2,east,2,1,3A,3A,Blue Sky,12,north,2,1",
    "6A-403,Pavan,2,east,4,0,6A,6A,Green House,16,east,2,1",
    "5A-203,Tanmayi,3,north,2,0,5A,5A,Sunshine,16,west,2,1",
    "3A-303,Satish,3,north,3,1,3A,3A,Blue Sky,12,north,2,1",
    "4A-103,Rakesh,3,south,1,1,4A,4A,Divine rentals,16,south,2,1",
    "4A-203,Pranavi,3,south,2,0,4A,4A,Divine rentals,16,south,2,1",
    "4A-301,Neelima,3,south,3,0,4A,4A,Divine rentals,16,south,2,1",
    "5A-304,Radika,3,west,3,1,5A,5A,Sunshine,16,west,2,1",
    "5A-401,Harini,3,west,4,0,5A,5A,Sunshine,16,west,2,1",
    "5A-402,Vijay,3,east,4,0,5A,5A,Sunshine,16,west,2,1",
    "4A-302,Swaroop,3,north,3,0,4A,4A,Divine rentals,16,south,2,1",
    "1A-203,Sandeep Dull,3,north,2,0,1A,1A,Santhi Nilayam,8,east,2,0",
    "2A-104,Srinivas,3,south,1,0,2A,2A,Adithya,12,west,2,0",
    "2A-201,Rambabu,3,west,2,0,2A,2A,Adithya,12,west,2,0",
    "6A-103,Murali,3,south,1,0,6A,6A,Green House,16,east,2,1",
    "2A-202,Swetha,3,west,2,0,2A,2A,Adithya,12,west,2,0",
    "2A-304,Gayatri,3,north,3,0,2A,2A,Adithya,12,west,2,0",
    "6A-202,Karthik,3,east,2,0,6A,6A,Green House,16,east,2,1",
    "4A-404,Pradeep,3,east,4,0,4A,4A,Divine rentals,16,south,2,1",
    "6A-204,Akhil,3,west,2,0,6A,6A,Green House,16,east,2,1",
    "1A-101,Rajendra Kumar,3,east,1,0,1A,1A,Santhi Nilayam,8,east,2,0",
    "3A-104,Harika,3,south,1,0,3A,3A,Blue Sky,12,north,2,1",
    "6A-303,Harshith,3,north,3,0,6A,6A,Green House,16,east,2,1",
    "5A-103,Vasavi,3,east,1,0,5A,5A,Sunshine,16,west,2,1",
    "3A-201,Jagadeesh,3,north,2,0,3A,3A,Blue Sky,12,north,2,1",
    "3A-203,Rashi,3,west,2,0,3A,3A,Blue Sky,12,north,2,1",
    "5A-202,Irfan,3,south,2,0,5A,5A,Sunshine,16,west,2,1",
    "6A-404,Kishore,3,west,4,1,6A,6A,Green House,16,east,2,1"
  ];
  answerFour: string[] = [
    "apartment_id,partment_name,no-floors,facing,no_floors,isLift,flat_id,owner_name,no_bedrooms,facing,floor,isAvailable,apartment_id",
    "3A,Blue Sky,12,north,2,1,3A-202,Prakash,2,east,2,1,3A",
    "5A,Sunshine,16,west,2,1,5A-101,Tanish,2,south,1,1,5A",
    "5A,Sunshine,16,west,2,1,5A-201,Ramya,2,north,2,1,5A",
    "6A,Green House,16,east,2,1,6A-302,Mallesh,2,north,3,1,6A"
  ];
  answerFive: string[] = [
    "flat_id,owner_name,no_bedrooms,facing,floor,isAvailable,apartment_id,apartment_id,apartment_name,no_flats,facing,no_floors,isLift",
    "1A-103,Sasidhar,2,west,1,1,1A,1A,Santhi Nilayam,8,east,2,0",
    "2A-101,Narendar,1,west,1,1,2A,2A,Adithya,12,west,2,0",
    "3A-103,Eshwar,1,west,1,1,3A,3A,Blue Sky,12,north,2,1",
    "6A-104,Pradeep,1,west,1,1,6A,6A,Green House,16,east,2,1",
    "5A-204,Prachi,1,west,2,1,5A,5A,Sunshine,16,west,2,1"

  ];


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

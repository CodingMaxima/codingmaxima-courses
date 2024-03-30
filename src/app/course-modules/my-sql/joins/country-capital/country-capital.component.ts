import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-capital',
  templateUrl: './country-capital.component.html',
  styleUrls: ['./country-capital.component.scss']
})
export class CountryCapitalComponent implements OnInit {

  toggleOn = false;
  buttonValue = "Show Answer";
  colums: any;
  JsonData: any;

  elementId: string;
  elementId2: string;

  answerOne: string[] = [
    "country_name,population,largest_river,main_crop,isSeaShore,capital_name,population,isSeaShore,area,country_name",
    "Thailand,70259783,Chao Phraya,Cassava,1,Bangkok,10539000,1,1568.7 sq.kms,Thailand",
    "Brazil,216527662,Amazon,Soybean,1,Brasilia,4728000,1,5802 sq.kms,Brazil",
    "Indonesia,281121689,Kapuas,palm oil,1,Jakarta,11075000,1,661.5 sq.kms,Indonesia",
    "Russia,146098876,Lena,potatoes,1,Moscow,12680000,1,2511 sq.kms,Russia",
    "Japan,125459537,Shinano,Rice,1,Tokyo,37194000,1,2194 sq.kms,Japan"];

  answerTwo: string[] = [
    "country_name,population,largest_river,main_crop,isSeaShore,capital_name,population,isSeaShore,area,country_name",
    "China,1453932069,Yangtze,rice,1,beijing,21766000,0,16410.5 sq.kms,China",
    "Germany,84488027,Danube,Barley,1,Berlin,3571000,0,891.8 sq.kms,Germany",
    "Egypt,107407211,Nile,Wheat,1,Cairo,22183000,0,453 sq.kms,Egypt",
    "India,1415681359,Ganga,rice,1,Delhi,32941000,0,1483 sq.kms	,India",
    "SaudiArabia,36238583,Wadi al-Rummah,watermelon,1,Riyadh,9058394,0,1973 sq.kms,Saudi Arabia"
  ];
  answerThree: string[] = [
    "country_name,population,largest_river,main_crop,isSeaShore,capital_name,population,isSeaShore,area,country_name",
    "Kazakhasthan,19369834,Irtysh,Wheat,0,Astana,1291000,0,722 sq.kms,Kazakhasthan",
    "Serbia,8644561,Danube,Sunflower,0,Belgrade,1408000,0,360 sq.kms,Serbia",
    "Kosovo,1770003,Drini,Wheat,0,Pristina,1768000,0,572 sq.kms,Kosovo",
    "Bulgaria,6810563,Danube,Maize,0,Sofia,1288000,0,492 sq.kms,Bulgaria",
    "Austria,9142045,Danube,Wheat,0,Vienna,1975000,0,414.6 sq.kms,Austria"
  ];
  answerFour: string[] = [
    "country_name,population,capial_name,population",
    "China,1453932069,beijing,21766000",
    "India,1415681359,Delhi,32941000",
    "Indonesia,281121689,Jakarta,11075000",
    "Brazil,216527662,Brasilia,4728000",
    "Russia,146098876,Moscow,12680000",
    "Japan,125459537,Tokyo,37194000",
    "Egypt,107407211,Cairo,22183000",
    "Germany,84488027,Berlin,3571000",
    "Thailand,70259783,Bangkok,10539000",
    "Saudi Arabia,36238583,Riyadh,9058394",
    "Kazakhasthan,19369834,Astana,1291000",
    "Austria,9142045,Vienna,1975000",
    "Serbia,8644561,Belgrade,1408000",
    "Bulgaria,6810563,Sofia,1288000",
    "Kosovo,1770003,Pristina,1768000"
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

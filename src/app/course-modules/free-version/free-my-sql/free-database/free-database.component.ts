import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-database',
  templateUrl: './free-database.component.html',
  styleUrls: ['./free-database.component.scss']
})
export class FreeDatabaseComponent implements OnInit {

  elementId:string;
  elementId2:string;
  constructor() {
    this.elementId = "create"
     this.elementId2 = "one"; 
    }
  tabChange(event:Event){
    this.elementId2 = (event.target as Element).id;
  }
  mainTabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
  setVideoSpeed(speed: number){
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }

}

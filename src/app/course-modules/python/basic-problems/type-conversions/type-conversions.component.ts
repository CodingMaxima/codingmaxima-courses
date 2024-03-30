import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-conversions',
  templateUrl: './type-conversions.component.html',
  styleUrls: ['./type-conversions.component.scss']
})
export class TypeConversionsComponent implements OnInit {

  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number){
  
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }


}

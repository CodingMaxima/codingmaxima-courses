import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queryparam-fragments',
  templateUrl: './queryparam-fragments.component.html',
  styleUrls: ['./queryparam-fragments.component.scss']
})
export class QueryparamFragmentsComponent implements OnInit {

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

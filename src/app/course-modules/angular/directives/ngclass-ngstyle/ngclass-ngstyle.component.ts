import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-ngstyle',
  templateUrl: './ngclass-ngstyle.component.html',
  styleUrls: ['./ngclass-ngstyle.component.scss']
})
export class NgclassNgstyleComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-ngif',
  templateUrl: './ngfor-ngif.component.html',
  styleUrls: ['./ngfor-ngif.component.scss']
})
export class NgforNgifComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstnonrepeatingchar',
  templateUrl: './firstnonrepeatingchar.component.html', 
  styleUrls: ['./firstnonrepeatingchar.component.scss'] 
})
export class FirstnonrepeatingcharComponent implements OnInit {
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

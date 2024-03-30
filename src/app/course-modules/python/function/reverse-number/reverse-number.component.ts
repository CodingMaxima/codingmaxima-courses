import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse-number',
  templateUrl: './reverse-number.component.html',
  styleUrls: ['./reverse-number.component.scss']
})
export class ReverseNumberComponent {

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

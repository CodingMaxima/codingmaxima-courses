import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nth-fibonacci-number',
  templateUrl: './nth-fibonacci-number.component.html', 
  styleUrls: ['./nth-fibonacci-number.component.scss'] 
})
export class NthFibonacciNumberComponent implements OnInit {
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

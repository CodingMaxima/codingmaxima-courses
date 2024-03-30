import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knapsack-problem01',
  templateUrl: './knapsack-problem01.component.html', 
  styleUrls: ['./knapsack-problem01.component.scss'] 
})
export class KnapsackProblem01Component implements OnInit {
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

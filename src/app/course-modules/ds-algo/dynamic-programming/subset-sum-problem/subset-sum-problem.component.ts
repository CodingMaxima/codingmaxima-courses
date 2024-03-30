import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subset-sum-problem',
  templateUrl: './subset-sum-problem.component.html', 
  styleUrls: ['./subset-sum-problem.component.scss'] 
})
export class SubsetSumProblemComponent implements OnInit {
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

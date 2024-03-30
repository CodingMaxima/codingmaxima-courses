import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longest-increasing-subsequence',
  templateUrl: './longest-increasing-subsequence.component.html', 
  styleUrls: ['./longest-increasing-subsequence.component.scss'] 
})
export class LongestIncreasingSubsequenceComponent implements OnInit {
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

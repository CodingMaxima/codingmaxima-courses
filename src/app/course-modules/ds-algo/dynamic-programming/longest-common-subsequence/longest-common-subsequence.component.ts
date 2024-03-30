import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longest-common-subsequence',
  templateUrl: './longest-common-subsequence.component.html', 
  styleUrls: ['./longest-common-subsequence.component.scss'] 
})
export class LongestCommonSubsequenceComponent implements OnInit {
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

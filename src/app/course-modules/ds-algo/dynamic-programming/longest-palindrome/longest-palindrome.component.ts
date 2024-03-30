import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longest-palindrome',
  templateUrl: './longest-palindrome.component.html', 
  styleUrls: ['./longest-palindrome.component.scss'] 
})
export class LongestPalindromeComponent implements OnInit {
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

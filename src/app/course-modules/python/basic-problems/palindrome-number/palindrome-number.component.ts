import { Component, OnInit } from '@angular/core';
import { MediaPythonMapData } from '../../media-map-data';

@Component({
  selector: 'app-palindrome-number',
  templateUrl: './palindrome-number.component.html',
  styleUrls: ['./palindrome-number.component.scss']
})
export class PalindromeNumberComponent implements OnInit {
  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaPythonMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Basic_Problems.Palindrome_Number.audio;
     this.videoData = mediamap.mediaData.Basic_Problems.Palindrome_Number.video;
    }
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

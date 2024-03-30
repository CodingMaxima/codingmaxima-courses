import { Component, OnInit } from '@angular/core';
import { MediaCoreJavaMapData } from '../../media-map-data';

@Component({
  selector: 'app-palindromemethod',
  templateUrl: './palindromemethod.component.html',
  styleUrls: ['./palindromemethod.component.scss']
})
export class PalindromemethodComponent implements OnInit {

  elementId:string;
  audioData:any;
  videoData:any;

  constructor(mediamap:MediaCoreJavaMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Methods.Palindrome_or_Not_Method.audio;
     this.videoData = mediamap.mediaData.Methods.Palindrome_or_Not_Method.video;
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

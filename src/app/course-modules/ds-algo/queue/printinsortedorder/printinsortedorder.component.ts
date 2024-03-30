import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printinsortedorder',
  templateUrl: './printinsortedorder.component.html', 
  styleUrls: ['./printinsortedorder.component.scss'] 
})
export class PrintinsortedorderComponent implements OnInit {
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

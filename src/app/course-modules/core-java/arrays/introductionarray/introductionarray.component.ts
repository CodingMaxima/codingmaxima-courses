import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introductionarray',
  templateUrl: './introductionarray.component.html',
  styleUrls: ['./introductionarray.component.scss']
})
export class IntroductionarrayComponent implements OnInit {

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number){
  
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }

}

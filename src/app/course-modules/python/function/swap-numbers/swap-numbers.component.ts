import { Component } from '@angular/core';

@Component({
  selector: 'app-swap-numbers',
  templateUrl: './swap-numbers.component.html',
  styleUrls: ['./swap-numbers.component.scss']
})
export class SwapNumbersComponent {

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
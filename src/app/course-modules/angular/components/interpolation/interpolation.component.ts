import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {
  elementId:string;
  actButton: any = 1.0;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }
  setVideoSpeed(speed: number){
  
    this.actButton = speed;
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
    
  }
}

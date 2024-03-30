import { Component } from '@angular/core';

@Component({
  selector: 'app-pattern1',
  templateUrl: './pattern1.component.html',
  styleUrls: ['./pattern1.component.scss']
})
export class Pattern1Component {

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

import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  actButton: any = 1.0;
  elementId:string;
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

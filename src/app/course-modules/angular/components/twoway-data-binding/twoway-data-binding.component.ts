import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-data-binding',
  templateUrl: './twoway-data-binding.component.html',
  styleUrls: ['./twoway-data-binding.component.scss']
})
export class TwowayDataBindingComponent implements OnInit {
  actButton: any = 1.0;
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number){
  
    this.actButton = speed;
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
    
  }

}

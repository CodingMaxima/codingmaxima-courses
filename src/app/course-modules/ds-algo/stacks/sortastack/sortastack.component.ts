import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortastack',
  templateUrl: './sortastack.component.html', 
  styleUrls: ['./sortastack.component.scss'] 
})
export class SortastackComponent implements OnInit {
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

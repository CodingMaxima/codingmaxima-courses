import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heapsort',
  templateUrl: './heapsort.component.html', 
  styleUrls: ['./heapsort.component.scss'] 
})
export class HeapsortComponent implements OnInit {
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

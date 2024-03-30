import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyandsell',
  templateUrl: './buyandsell.component.html', 
  styleUrls: ['./buyandsell.component.scss'] 
})
export class BuyandsellComponent implements OnInit {
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

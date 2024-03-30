import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productarrarpuzzle',
  templateUrl: './productarrarpuzzle.component.html', 
  styleUrls: ['./productarrarpuzzle.component.scss'] 
})
export class ProductarrarpuzzleComponent implements OnInit {
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

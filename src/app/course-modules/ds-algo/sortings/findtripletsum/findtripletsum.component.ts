import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findtripletsum',
  templateUrl: './findtripletsum.component.html', 
  styleUrls: ['./findtripletsum.component.scss'] 
})
export class FindtripletsumComponent implements OnInit {
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

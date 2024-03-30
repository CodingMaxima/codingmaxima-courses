import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-classes',
  templateUrl: './generic-classes.component.html',
  styleUrls: ['./generic-classes.component.scss']
})
export class GenericClassesComponent implements OnInit {

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

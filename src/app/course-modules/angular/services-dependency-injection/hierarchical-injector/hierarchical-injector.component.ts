import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hierarchical-injector',
  templateUrl: './hierarchical-injector.component.html',
  styleUrls: ['./hierarchical-injector.component.scss']
})
export class HierarchicalInjectorComponent implements OnInit {

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

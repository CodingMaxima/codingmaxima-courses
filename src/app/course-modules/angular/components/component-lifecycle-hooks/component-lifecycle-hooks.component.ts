import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle-hooks',
  templateUrl: './component-lifecycle-hooks.component.html',
  styleUrls: ['./component-lifecycle-hooks.component.scss']
})
export class ComponentLifecycleHooksComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.scss']
})
export class LocalReferencesComponent implements OnInit {

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

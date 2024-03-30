import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-of-css',
  templateUrl: './properties-of-css.component.html',
  styleUrls: ['./properties-of-css.component.scss']
})
export class PropertiesOfCSSComponent implements OnInit {

  elementId:string;

  constructor() {
    this.elementId ="one";
 }
 tabChange(event: Event) {
  this.elementId = (event.target as Element).id;
}
  ngOnInit(): void {
  }
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }

}

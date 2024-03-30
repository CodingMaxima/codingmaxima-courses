import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-box-model',
  templateUrl: './css-box-model.component.html',
  styleUrls: ['./css-box-model.component.scss']
})
export class CssBoxModelComponent implements OnInit {

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

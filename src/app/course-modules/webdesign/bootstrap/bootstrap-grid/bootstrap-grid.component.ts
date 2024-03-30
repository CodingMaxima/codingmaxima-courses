import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-grid',
  templateUrl: './bootstrap-grid.component.html',
  styleUrls: ['./bootstrap-grid.component.scss']
})
export class BootstrapGridComponent implements OnInit {
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

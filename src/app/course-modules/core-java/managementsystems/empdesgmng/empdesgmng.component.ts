import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdesgmng',
  templateUrl: './empdesgmng.component.html',
  styleUrls: ['./empdesgmng.component.scss']
})
export class EmpdesgmngComponent implements OnInit {

  elementId: string;
  elementId2: string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "pojo";
  }
  ngOnInit(): void {
  }
  tabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }
  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  setVideoSpeed(speed: number) {

    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }


}

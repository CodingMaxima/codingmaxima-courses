import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  elementId: string;
  elementId2: string;

  constructor() {
    this.elementId = "one";
    this.elementId2 = "inputtype";
  }
  tabChange(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  subTabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparator-comparable',
  templateUrl: './comparator-comparable.component.html',
  styleUrls: ['./comparator-comparable.component.scss']
})
export class ComparatorComparableComponent implements OnInit {

  elementId: string;
  elementId2: string;
  constructor() {
    this.elementId = "one";
    this.elementId2 = "introduction";
  }
  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
    this.elementId2 = "introduction";
  }
  tabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  ngOnInit(): void {
  }

  setVideoSpeed(speed: number) {

    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;

  }

}

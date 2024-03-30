import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partition-equal-subset-sum',
  templateUrl: './partition-equal-subset-sum.component.html', 
  styleUrls: ['./partition-equal-subset-sum.component.scss'] 
})
export class PartitionEqualSubsetSumComponent implements OnInit {
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

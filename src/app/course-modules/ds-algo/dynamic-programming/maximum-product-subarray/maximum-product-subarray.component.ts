import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maximum-product-subarray',
  templateUrl: './maximum-product-subarray.component.html', 
  styleUrls: ['./maximum-product-subarray.component.scss'] 
})
export class MaximumProductSubarrayComponent implements OnInit {
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

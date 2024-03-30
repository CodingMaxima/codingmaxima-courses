import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sending-requests',
  templateUrl: './sending-requests.component.html',
  styleUrls: ['./sending-requests.component.scss']
})
export class SendingRequestsComponent implements OnInit {

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

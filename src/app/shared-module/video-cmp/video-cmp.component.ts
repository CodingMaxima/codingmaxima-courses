import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-cmp',
  templateUrl: './video-cmp.component.html',
  styleUrls: ['./video-cmp.component.scss']
})
export class VideoCmpComponent implements OnInit,OnChanges {

  @Input() public url?:any;
  @Input() public audioData?:any = [];
  totalUrl:any;
  audioUrl:any;
  audioLanguages: string[] = [];
  audioAddress: string[] = [];
  constructor() { }
  
  audio: any
  actButton: any = 1.0;

  ngOnInit(): void {
    
    this.audioLanguages = Object.keys(this.audioData)
    this.audio = "Mute"
    this.totalUrl=this.url;
    this.audioUrl =this.audioData[this.audio];
    var myvideo = <HTMLMediaElement>document.getElementById("play");
    var myaudio = <HTMLMediaElement>document.getElementById("myaudio");

    var change_time_state = true;

    myvideo.onplay = function () {
      myaudio.play();
      if (change_time_state) {
        myaudio.currentTime = myvideo.currentTime;
        change_time_state = false;
      }
    }

    myvideo.onkeydown = function (event) {

      if (event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
        myaudio.currentTime = myvideo.currentTime;
      }
    }

    myvideo.onpause = function () {
      myaudio.pause();
      change_time_state = true;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.totalUrl= this.url;
  }
  setVideoSpeed(speed: number){
  
    this.actButton = speed;
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
    var myaudio = <HTMLMediaElement>document.getElementById("myaudio");
    myaudio.playbackRate = speed;
  }

  changeAudio(audioFileName: any){
    this.audio = audioFileName;
    this.audioUrl = this.audioData[audioFileName]
    var myaudio = <HTMLMediaElement>document.getElementById("myaudio");
    var video = <HTMLMediaElement>document.getElementById('play');
    video.load();
    myaudio.load();
    video.play();
    myaudio.play();
    this.actButton = 1.0;
  }

}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-classes',
  templateUrl: './video-classes.component.html',
  styleUrls: ['./video-classes.component.scss']
})

export class VideoClassesComponent implements OnInit,OnChanges {

  @Input() public url?:any;
  totalUrl:any;
  audioUrl:any;
  audioAddress: string[] = [];
  constructor() { }
  
  audio: any
  actButton: any = 1.0;

  ngOnInit(): void {
    
    this.audio = "Mute"
    this.totalUrl=this.url;
    var myvideo = <HTMLMediaElement>document.getElementById("play");
    var myaudio = <HTMLMediaElement>document.getElementById("myaudio");
    this.audioUrl = this.setAudioUrl(this.totalUrl);
    var change_time_state = true;

    myvideo.onplay = function () {
      myaudio.play();
      if (change_time_state) {
        myaudio.currentTime = myvideo.currentTime;
        change_time_state = false;
      }
    }

    myvideo.onpause = function () {
      myaudio.pause();
      change_time_state = true;
    }

    myvideo.onkeydown = function(event){

      if (event.key == 'ArrowRight' || event.key == 'ArrowLeft'){
        myaudio.currentTime = myvideo.currentTime;
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.totalUrl= this.url;
  }
  setAudioUrl(originalUrl:string):string{
    const parts = originalUrl.split('.');
    const extension = parts.pop();
    const modifiedExtension = extension?.slice(0, -3) + 'mp3';
    const modifiedUrl = parts.join('.') + '.' + modifiedExtension;

    return modifiedUrl;
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
    var myaudio = <HTMLMediaElement>document.getElementById("myaudio");
    var video = <HTMLMediaElement>document.getElementById('play');
    video.load();
    myaudio.load();
    video.play();
    myaudio.play();
    this.actButton = 1.0;
  }

}
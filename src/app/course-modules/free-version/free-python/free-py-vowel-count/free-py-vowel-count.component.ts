import { Component } from '@angular/core';
import { MediaFreeVersionMapData } from '../../media-map-data';

@Component({
  selector: 'app-free-py-vowel-count',
  templateUrl: './free-py-vowel-count.component.html',
  styleUrls: ['./free-py-vowel-count.component.scss']
})
export class FreePyVowelCountComponent {

  elementId:string;
  audioData:any;
  videoData:any;
  constructor(mediamap:MediaFreeVersionMapData) {
     this.elementId = "one"; 
     this.audioData = mediamap.mediaData.Free_Python.Vowel_Count.audio;
     this.videoData = mediamap.mediaData.Free_Python.Vowel_Count.video;
    }
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

import { Component, OnInit } from '@angular/core';
import { MediaWebDevelopmentMapData } from '../../media-map-data';

@Component({
  selector: 'app-headingsparagraph',
  templateUrl: './headingsparagraph.component.html',
  styleUrls: ['./headingsparagraph.component.scss']
})
export class HeadingsparagraphComponent implements OnInit {

  elementId: string;
  elementId2: string;
  audioData:any;
  videoData:any;

  constructor(mediamapdata:MediaWebDevelopmentMapData) {
    this.elementId = "one";
    this.elementId2 = "introduction";
    this.audioData = mediamapdata.mediaData.HTML_Introduction.Headings_Paragraph.Heading_Paragraph.audio;
    this.videoData = mediamapdata.mediaData.HTML_Introduction.Headings_Paragraph.Heading_Paragraph.video;

  }

  ngOnInit(): void {
  }
  mainTab(event: Event) {
    this.elementId = (event.target as Element).id;
  }
  tabChange(event: Event) {
    this.elementId2 = (event.target as Element).id;
  }

  setVideoSpeed(speed: number) {
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
  }
}

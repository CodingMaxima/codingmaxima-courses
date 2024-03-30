import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist-class',
  templateUrl: './playlist-class.component.html',
  styleUrls: ['./playlist-class.component.scss']
})
export class PlaylistClassComponent {
  elementId:string;
  constructor() { this.elementId = "one"; }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

  ngOnInit(): void {
  }
}

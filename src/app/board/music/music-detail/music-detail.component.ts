import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.scss']
})
export class MusicDetailComponent implements OnInit {

  constructor() {}

  @Input() itemDetail ;

  action: boolean;
  audio: HTMLAudioElement;
  
  ngOnInit() {
    this.action = true;
    this.audio = new Audio();
    this.audio.src = this.itemDetail.previewUrl;
  }


  onAction() {
        
    if (this.action) {
      this.audio.play();
      this.action = false;
    } else {
      this.audio.pause();
      this.action = true;
    }
    
  }
  
}

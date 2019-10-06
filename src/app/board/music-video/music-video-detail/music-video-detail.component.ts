import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from 'src/app/dialog/dialog.component';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-music-video-detail',
  templateUrl: './music-video-detail.component.html',
  styleUrls: ['./music-video-detail.component.scss']
})
export class MusicVideoDetailComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }
  
  @Input() itemDetail;
  @ViewChild('myVideo') myVideo: HTMLVideoElement; 

  action : boolean;
  musicAudio: HTMLVideoElement;


  ngOnInit() {
    this.action = true;
    
    // const myVideo: nr

    // this.musicAudio = new HTMLVideoElement();
    // console.log(this.musicAudio);
  }

  onAction() {

    if (this.action) {
      this.myVideo.play();
      this.action = false;
    } else {
      this.myVideo.pause();
      this.action = true;
    }

  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(DialogComponent, {
                            height: 'fit-content',
                            width: 'fit-content',
                            data: this.itemDetail
                            });
    
                              
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

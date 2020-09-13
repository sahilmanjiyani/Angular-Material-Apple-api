import { Component, OnInit } from '@angular/core';
import { MusicComponent } from '../board/music/music.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  changeMusics = 0;
  changeMusicVideos = 0;
  changeMovies = 0;

  ngOnInit() {
    // this.change = 0;
  }

  changeMedia(change: boolean, media: any) {
    switch (media) {
      case 'musics': {
        change ? this.changeMusics++ : this.changeMusics--;
        console.log(change + ' ' + this.changeMusics);
        break;
      }

      case 'musicVideos': {
        change ? this.changeMusicVideos++ : this.changeMusicVideos--;
        console.log(change + ' ' + this.changeMusicVideos);
        break;
      }

      case 'movies': {
        change ? this.changeMovies++ : this.changeMovies--;
        console.log(change + ' ' + this.changeMovies);
        break;
      }
    }
  }

}

import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subscription } from 'rxjs';
import {CountService} from '../../shared/count.service';

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.component.html',
  styleUrls: ['./music-video.component.scss']
})
export class MusicVideoComponent implements OnInit, OnDestroy, OnChanges {

  constructor(private apiService: ApiService,
              private countService: CountService) { }

  displayMedia;
  musicVideoObj;
  subscription: Subscription;
  viewCount = 6;

  @Input() countMusicVideos: number;

  ngOnInit() {

    // subscription to search requested music list
    this.subscription = this.apiService.subject.subscribe(resObj => {
                              this.musicVideoObj = resObj["results"];
                              this.displayMedia = this.musicVideoObj.slice(0, this.viewCount);
                            });

   // subscription to default music list
    this.subscription = this.apiService.musicVideoLoad()
                    .subscribe( resObj => {
                      this.musicVideoObj = resObj["results"];
                      this.displayMedia = this.musicVideoObj.slice(0, this.viewCount);
                    });

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.musicVideoObj) {
      this.controlMediaCount();
    }
  }

  controlMediaCount() {
    const startCount = Math.abs(this.countMusicVideos) % this.viewCount;
    this.displayMedia =  this.musicVideoObj
      .slice((startCount * this.viewCount),
        (startCount * this.viewCount + this.viewCount));
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

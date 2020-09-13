import {Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subscription } from 'rxjs';
import {CountService} from '../../shared/count.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, OnDestroy, OnChanges {

  displayMedia;
  musicObj = [];
  subscription: Subscription;
  viewCount = 6;

  @Input() countMusics: number;

  constructor( private apiService: ApiService,
               private countService: CountService) {}

  ngOnInit() {
    // subscription to search requested music list
    this.subscription = this.apiService.subject.subscribe(re => {
       this.musicObj = re["results"];
       this.displayMedia = this.musicObj.slice(0, this.viewCount );
     });

    // subscription to default music list
    this.subscription = this.apiService.musicLoad()
    .subscribe(res => {
      this.musicObj = res["results"];
      this.displayMedia = this.musicObj.slice(0,  this.viewCount);
    }, error => console.log(error));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.musicObj) {
      this.controlMediaCount();
    }
  }

  controlMediaCount() {
    const startCount = Math.abs(this.countMusics) % this.viewCount;
    this.displayMedia =  this.musicObj
                            .slice((startCount * this.viewCount),
                                    (startCount * this.viewCount + this.viewCount));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

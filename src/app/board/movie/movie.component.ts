import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subscription } from 'rxjs';
import {CountService} from '../../shared/count.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy, OnChanges {

  displayMedia;
  movieObj = [];
  subscription: Subscription;
  viewCount = 6;

  @Input() countMovies: number;

  constructor( private apiService: ApiService) { }

  ngOnInit() {

    // subscription to search requested music list
    this.subscription = this.apiService.subject.subscribe(re => {
                    this.movieObj = re["results"];
                    this.displayMedia = this.movieObj.slice(0, this.viewCount);
                  });

   // subscription to default music list
    this.apiService.moviesLoad()
                    .subscribe( resObj => {
                      this.movieObj = resObj['results'];
                      this.displayMedia = this.movieObj.slice(0, this.viewCount);
                    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.movieObj) {
      this.controlMediaCount();
    }
  }

  controlMediaCount() {
    const startCount = Math.abs(this.countMovies) % this.viewCount;
    this.displayMedia =  this.movieObj
      .slice((startCount * this.viewCount),
        (startCount * this.viewCount + this.viewCount));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

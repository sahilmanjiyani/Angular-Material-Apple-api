import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  
  movieObj = [];
  subscription: Subscription;

  constructor( private apiService: ApiService ) { }

  ngOnInit() {

    // subscription to search requested music list
    this.subscription = this.apiService.subject.subscribe(re => {
      this.movieObj = re["results"];
    });
    
   // subscription to default music list
    this.apiService.moviesLoad()
                    .subscribe( resObj => {
                      this.movieObj = resObj['results'];
                    });
  }

}

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
  hideError: boolean;

  constructor( private apiService: ApiService ) { }

  ngOnInit() {

    this.hideError = true;

    // subscription to search requested music list
    this.subscription = this.apiService.movieSubject
                          .subscribe(re => {
                              this.hideError = true;
                              this.movieObj = re["results"];
                            }, 
                            error => {
                              console.log(error);
                              this.hideError = false;
                            });
    
   // subscription to default music list
   this.subscription = this.apiService.moviesLoad()
                        .subscribe( resObj => {
                          this.hideError = true;
                          this.movieObj = resObj['results'];
                        }, 
                        error => {
                          console.log(error);
                          this.hideError = false;
                        });

    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}

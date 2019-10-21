import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  
  movieObj = [];
  loadMusic = [];
  subscription: Subscription;
  counter: number = 0;

  @Input() changeList: any;

  constructor( private apiService: ApiService ) { }

  ngOnInit() {

    this.apiService.serviceUpdate('coldpaly', 'movie');

    // subscription to search requested music list
    this.subscription = this.apiService.movieSubject
                          .subscribe(
                            res => {
                              this.movieObj = res["results"];
                              this.loadMusic = this.movieObj.slice(0,6);
                            }, 
                            error => {
                              console.log(error);
                            }
                          );
    
    // subscription to default music list
    this.subscription = this.changeList
                            .subscribe(
                              ({type, change}) => {
                                if (type == 'music') {
                                  if ((this.counter < 7 && change) || (this.counter > 0 && !change)) {
                                    change ? this.counter++ : this.counter--;
                                  }
                                  this.loadMusic =  this.movieObj
                                                        .slice(this.counter * 6, (this.counter + 1) * 6);
                                }
                              }, 
                              error => {
                                console.log(error);
                              }
                            );
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}

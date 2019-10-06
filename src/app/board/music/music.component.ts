import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, OnDestroy {

  musicObj = [];
  subscription: Subscription;
  hideError: boolean;

  constructor( private apiService: ApiService) {}

  ngOnInit() {
    
    this.hideError = true;

    // subscription to search requested music list
    this.subscription = this.apiService.musicSubject
                          .subscribe(
                            re => {
                              this.hideError = true;
                              this.musicObj = re["results"];
                            }, 
                            error => {
                              console.log(error);
                              this.hideError = false;
                            }
                          );
     
    // subscription to default music list
    this.subscription = this.apiService.musicLoad()
                          .subscribe(
                            res => {
                              this.hideError = true;
                              this.musicObj = res["results"];
                            }, 
                            error => {
                              console.log(error);
                              this.hideError = false;
                            }
                          );   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

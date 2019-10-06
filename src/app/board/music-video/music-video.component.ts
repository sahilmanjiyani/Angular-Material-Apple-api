import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.component.html',
  styleUrls: ['./music-video.component.scss']
})
export class MusicVideoComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  musicVideoObj;
  subscription: Subscription;

  hideError: boolean;

  ngOnInit() {

    this.hideError = true;

    // subscription to search requested music list
    this.subscription = this.apiService.musicVideoSubject
                          .subscribe(
                            re => {
                              this.hideError = true;
                              this.musicVideoObj = re["results"];
                            },
                            error => {
                              this.hideError = false;
                            }
                          );
    
   // subscription to default music list
   this.subscription = this.apiService.musicVideoLoad()
                        .subscribe( 
                          resObj => {
                            this.hideError = true;
                            this.musicVideoObj = resObj['results'];
                          }, 
                          error => {
                            this.hideError = false;
                          }
                        );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

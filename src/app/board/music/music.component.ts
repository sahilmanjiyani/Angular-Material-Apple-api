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

  constructor( private apiService: ApiService) {}

  ngOnInit() {
    // subscription to search requested music list
    this.subscription = this.apiService.subject.subscribe(re => {
       this.musicObj = re["results"];
     });
     
    // subscription to default music list
    this.subscription = this.apiService.musicLoad()
    .subscribe(res => {
      this.musicObj = res["results"];
    });   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

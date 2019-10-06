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

  ngOnInit() {

    // subscription to search requested music list
    this.subscription = this.apiService.subject.subscribe(re => {
                              this.musicVideoObj = re["results"];
                            });
    
   // subscription to default music list
    this.apiService.musicVideoLoad()
        .subscribe( resObj => {
          this.musicVideoObj = resObj['results'];
        });

  }

}

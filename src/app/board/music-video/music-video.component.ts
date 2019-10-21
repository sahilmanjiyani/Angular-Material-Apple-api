import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.component.html',
  styleUrls: ['./music-video.component.scss']
})
export class MusicVideoComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  musicVideoObj = [];
  loadMusic = [];
  subscription: Subscription;
  counter: number = 0;

  @Input() changeList: any;

  ngOnInit() {

    this.apiService.serviceUpdate('coldpaly', 'musicVideo');

    // subscription to search requested music list
    this.subscription = this.apiService.musicVideoSubject
                          .subscribe(
                            res => {
                              this.musicVideoObj = res["results"];
                              console.log(res);
                              this.loadMusic = this.musicVideoObj.slice(0,6);
                              console.log(this.musicVideoObj);
                            }, 
                            error => {
                              console.log(error);
                            }
                          );
    
   // subscription to default music list

    this.subscription = this.changeList
                          .subscribe(
                            ({type, change}) => {
                             
                              if ((this.counter < 7 && change) || (this.counter > 0 && !change)) {
                                change ? this.counter++ : this.counter--;
                              }
                             
                              this.loadMusic =  this.musicVideoObj
                                                    .slice(this.counter * 6, (this.counter + 1) * 6);
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

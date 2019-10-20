import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, OnDestroy {

  musicObj = [];
  loadMusic = [];
  subscription: Subscription;
  counter: number = 0;

  @Input() changeList: any;

  constructor( private apiService: ApiService) {}

  ngOnInit() {
     
    // subscription to default music list 
    this.apiService.serviceUpdate('coldpaly', 'music');

    this.subscription = this.apiService.musicSubject
                              .subscribe(
                                res => {
                                  this.musicObj = res["results"];
                                  console.log(res);
                                  this.loadMusic = this.musicObj.slice(0,6);
                                  console.log(this.musicObj);
                                }, 
                                error => {
                                  console.log(error);
                                }
                              ); 

   this.subscription = this.changeList
                            .subscribe(
                              ({type, change}) => {
                                if ((this.counter < 7 && change) || (this.counter > 0 && !change)) {
                                  change ? this.counter++ : this.counter--;
                                }
                                this.loadMusic =  this.musicObj
                                                      .slice(this.counter * 6, (this.counter + 1) * 6);
                              }, 
                              error => {
                                console.log(error);
                              }
                            );
  }

  // editMusicView() {
  //   console.log('edit emitted');
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

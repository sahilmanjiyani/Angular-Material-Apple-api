import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CountService {

  viewCount = 6;
  constructor(  ) {}

  subject = new Subject();

  controlMediaCount(count: number, media: any ) {
    const startCount = Math.abs(count) % this.viewCount;
    return media.slice((startCount * this.viewCount), (startCount * this.viewCount + this.viewCount));
  }

}

import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

class Media {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  mediaArray: Media[] = [
    { value: "music", viewValue: "Music"},
    { value: "musicVideo", viewValue: "Music Video"},
    { value: "movie", viewValue: "Movie"}
  ];

  options = [ 'Taylor', 'Coldplay'];
  constructor( private apiService: ApiService ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const searchedText = form.value['searchText'];
    const mediaContent = form.value['mediaSelect'];
    this.apiService.serviceUpdate(searchedText, mediaContent);
  }

}

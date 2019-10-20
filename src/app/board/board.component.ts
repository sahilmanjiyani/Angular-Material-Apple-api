import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Output() edit = new Subject<{type: string, change: boolean}>();
  
  constructor() {}

  ngOnInit() {
  }

  editList(type: string, change: boolean) {
    this.edit.next({ type, change });
  }

}

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  @Input() itemDetail;

  ngOnInit() {
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(DialogComponent, {
                            height: 'fit-content',
                            width: 'fit-content',
                            data: this.itemDetail
                            });
    
                              
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}

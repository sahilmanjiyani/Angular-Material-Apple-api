import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';


const MaterialComponents = [
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]

})
export class MaterialModule { }

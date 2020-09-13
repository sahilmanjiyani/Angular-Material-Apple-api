import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { BoardComponent } from './board/board.component';
import { MusicComponent } from './board/music/music.component';

import { ApiService } from "./shared/api.service";
import { LoginService } from './shared/login.service';
import { HttpClientModule } from '@angular/common/http';
import { MusicDetailComponent } from './board/music/music-detail/music-detail.component';
import { MusicVideoComponent } from './board/music-video/music-video.component';
import { MusicVideoDetailComponent } from './board/music-video/music-video-detail/music-video-detail.component';
import { DialogComponent } from './dialog/dialog.component';
import { MovieComponent } from './board/movie/movie.component';
import { MovieDetailComponent } from './board/movie/movie-detail/movie-detail.component';
import { HeaderComponent } from './board/header/header.component';
import {CountService} from './shared/count.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent,
    MusicComponent,
    MusicDetailComponent,
    MusicVideoComponent,
    MusicVideoDetailComponent,
    DialogComponent,
    MovieComponent,
    MovieDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [LoginService, ApiService, CountService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }

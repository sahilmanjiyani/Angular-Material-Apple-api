import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

    
    musicSubject = new Subject();
    musicVideoSubject = new Subject();
    movieSubject = new Subject();
    
    constructor( private http: HttpClient ) {}
 
    serviceUpdate(searched: string = "Coldplay", mediaType: string) {
      
        const music = 'music', musicVideo = 'musicVideo', movie = 'movie';

        switch (mediaType) {
            case music:
                const updateMusic = this.loadMedia(music, searched);
                updateMusic.subscribe(result => {
                        this.musicSubject.next(result);
                });
                    console.log('in music')
                break;

            case musicVideo:
                const updateMusicVideo = this.loadMedia(musicVideo, searched);
                updateMusicVideo.subscribe(result => {
                        this.musicVideoSubject.next(result);
                    });
                    console.log('in music video')
                break;

            case movie:
                const updateMovie = this.loadMedia(movie, searched);
                updateMovie.subscribe(result => {
                        this.movieSubject.next(result);
                    });
                    console.log('in movie')

                break;
        
            default:
                break;
        }
        
    }

    loadMedia(type: string, termSearched?: string) {

        return this.http
                    .get<[{resultCounts, results}]>('https://itunes.apple.com/search', {
                        params: new HttpParams()
                                        .set('term', termSearched)
                                        .set('country', 'ca')
                                        .set('limit', '50')
                                        .set('media', type)
                    });
    }

   

    // musicVideoLoad(searchQuery?: string) {

    //     return this.http
    //                 .get<[{resultCounts, results}]>('https://itunes.apple.com/search', {
    //                     params: new HttpParams()
    //                                     .set('term', searchQuery ? searchQuery : 'coldPlay')
    //                                     .set('country', 'ca')
    //                                     .set('limit', '6')
    //                                     .set('media', 'musicVideo')
    //                 });
    // }


    // moviesLoad(searchQuery?: string) {

    //     return this.http
    //                 .get<[{resultCounts, results}]>('https://itunes.apple.com/search', {
    //                     params: new HttpParams()
    //                                     .set('term',  searchQuery ? searchQuery : 'coldPlay')
    //                                     .set('country', 'ca')
    //                                     .set('limit', '6')
    //                                     .set('media', 'movie')
    //                 });
    // }

}
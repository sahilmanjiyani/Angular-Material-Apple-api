import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

    constructor( private http: HttpClient ) {}

    musicSubject = new Subject();
    musicVideoSubject = new Subject();
    movieSubject = new Subject();
    
    serviceUpdate(searched: string = "Coldplay", mediaType: string) {
      
        switch (mediaType) {
            case 'music':
                const updateMusic = this.musicLoad(searched);
                updateMusic.subscribe(result => {
                        this.musicSubject.next(result);
                });
                    console.log('in music')
                break;

            case 'musicVideo':
                const updateMusicVideo = this.musicVideoLoad(searched);
                updateMusicVideo.subscribe(result => {
                        this.musicVideoSubject.next(result);
                    });
                    console.log('in music video')
                break;

            case 'movie':
                const updateMovie = this.moviesLoad(searched);
                updateMovie.subscribe(result => {
                        this.movieSubject.next(result);
                    });
                    console.log('in movie')

                break;
        
            default:
                break;
        }
        
    }

    musicLoad(termSearched?: string) {

        return this.http
                    .get<[{resultCounts, results}]>('https://itunes.apple.com/search', {
                        params: new HttpParams()
                                        .set('term', termSearched)
                                        .set('country', 'ca')
                                        .set('limit', '50')
                                        .set('media', 'music')
                    });
    }

   

    musicVideoLoad(searchQuery?: string) {

        return this.http
                    .get<[{resultCounts, results}]>('https://itunes.apple.com/search', {
                        params: new HttpParams()
                                        .set('term', searchQuery ? searchQuery : 'coldPlay')
                                        .set('country', 'ca')
                                        .set('limit', '6')
                                        .set('media', 'musicVideo')
                    });
    }


    moviesLoad(searchQuery?: string) {

        return this.http
                    .get<[{resultCounts, results}]>('https://itunes.apple.com/search', {
                        params: new HttpParams()
                                        .set('term',  searchQuery ? searchQuery : 'coldPlay')
                                        .set('country', 'ca')
                                        .set('limit', '6')
                                        .set('media', 'movie')
                    });
    }

}
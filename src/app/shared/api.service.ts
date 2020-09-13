import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { load } from '@angular/core/src/render3';

@Injectable()
export class ApiService {

    URL = 'https://itunes.apple.com/search';

    constructor( private http: HttpClient ) {}

    subject = new Subject();

    serviceUpdate(searched: string, mediaType: string) {

        let loaded = null;

        switch (mediaType) {
            case 'music':
                loaded = this.musicLoad(searched);
                loaded.subscribe(result => {
                        this.subject.next(result);
                    });
                break;

            case 'musicVideo':
                loaded = this.musicVideoLoad(searched);
                loaded.subscribe(result => {
                        this.subject.next(result);
                    });
                break;

            case 'movie':
                loaded = this.moviesLoad(searched);
                loaded.subscribe(result => {
                        this.subject.next(result);
                    });
                break;

            default:
                break;
        }

    }

    musicLoad(termSearched?: string) {

        return this.http
            .get<[{resultCounts, results}]>(this.URL, {
                params: new HttpParams()
                                .set('term', termSearched ? termSearched : 'coldPlay')
                                .set('country', 'ca')
                                .set('limit', '36')
                                .set('media', 'music')
            });
    }



        musicVideoLoad(searchQuery?: string) {

        return this.http
                    .get<[{resultCounts, results}]>(this.URL, {
                        params: new HttpParams()
                                        .set('term', searchQuery ? searchQuery : 'coldPlay')
                                        .set('country', 'ca')
                                        .set('limit', '36')
                                        .set('media', 'musicVideo')
                    });

    }


    moviesLoad(searchQuery?: string) {

        return this.http
                    .get<[{resultCounts, results}]>(this.URL, {
                        params: new HttpParams()
                                        .set('term',  searchQuery ? searchQuery : 'coldPlay')
                                        .set('country', 'ca')
                                        .set('limit', '36')
                                        .set('media', 'movie')
                    });
    }

}

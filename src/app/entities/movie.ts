// import { any } from '@firebase/firestore/';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Seo } from './index'
export interface IMovie {
    artists: Array<string>,
    directors: string,
    languageCode: string,
    musicDirector: string,
    releaseDate: any,
    title: string,
    imageUrl: string,
    songs: AngularFirestoreCollection,
    createdAt: any,
    seoInfo: Partial<Seo>
}

export class Movie implements IMovie {
    artists: Array<string>;
    directors: string;
    languageCode: string;
    musicDirector: string;
    releaseDate: any;
    title: string;
    imageUrl: string;
    songs: AngularFirestoreCollection;
    createdAt: any;
    seoInfo: Partial<Seo>

    constructor(movie) {
        this.artists = movie.artists || [],
        this.directors = movie.directors || '';
        this.languageCode = movie.languageCode || '';
        this.releaseDate = movie.releaseDate || '';
        this.seoInfo = movie.seoInfo || {};
    }
}

export interface MovieWithId extends Movie {
    id: string;
}
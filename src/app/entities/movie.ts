// import { any } from '@firebase/firestore/';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
export interface IMovie {
    artists: Array<string>,
    directors: string,
    languageCode: string,
    musicDirector: string,
    releaseDate: any,
    title: string,
    imageUrl: string,
    songs: AngularFirestoreCollection,
    createdAt: any
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

    constructor(movie) {
        this.artists = movie.artists || [],
        this.directors = movie.directors || '';
        this.languageCode = movie.languageCode || '';
        this.releaseDate 
    }
}

export interface MovieWithId extends Movie {
    id: string;
}
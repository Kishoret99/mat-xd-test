import { Timestamp } from '@firebase/firestore-types';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
export interface IMovie {
    artists: Array<string>,
    directors: string,
    languageCode: string,
    musicDirector: string,
    releaseDate: Timestamp,
    title: string,
    imageUrl: string,
    songs: AngularFirestoreCollection,
    createdAt: Timestamp
}

export class Movie implements IMovie {
    artists: Array<string>;
    directors: string;
    languageCode: string;
    musicDirector: string;
    releaseDate: Timestamp;
    title: string;
    imageUrl: string;
    songs: AngularFirestoreCollection;
    createdAt: Timestamp;

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
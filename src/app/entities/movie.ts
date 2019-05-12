import { Timestamp } from '@firebase/firestore-types';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
export interface Movie {
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
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from '../../node_modules/rxjs';


export interface Movie {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movie: Observable<Movie>;
  movies;
  songs = new Array(7);
  title = 'mat-xd-test';
  
  private movieDoc: AngularFirestoreDocument<Movie>;


  constructor(
    private db: AngularFirestore
  ) {
    this.movies = db.collection('movies').valueChanges();
    
  }
}

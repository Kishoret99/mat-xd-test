import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

export interface Movie {
  artists: Array<string>,
  directors: string,
  languageCode: string,
  musicDirector: string,
  releaseDate: Date,
  title: string,
  imageUrl: string,
  songs: AngularFirestoreCollection
}

export interface Song {
  duration: string;
  languageCode: string;
  lyricist: string;
  lyrics: string;
  singers: Array<string>;
  title: string;
}


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieName;
  public movie: Observable<Movie>;
  public songs: Observable<Array<Song>>;
  private movieDocument: AngularFirestoreDocument<Movie>;
  private moviesCollection: AngularFirestoreCollection<Movie>;
  private songsCollection: AngularFirestoreCollection<Song>;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      if(param.movieName) {
        this.movieDocument = this.afs.doc(`movies/${param.movieName}`);
        this.movie = this.movieDocument.valueChanges();
        this.songsCollection = this.movieDocument.collection('songs');
        this.songs = this.songsCollection.valueChanges();

        //DEBUG
        this.movie.subscribe(movie => {
          console.log('> movie', movie);
        });

        this.songs.subscribe(songs => {
          console.log('> songs', songs);
        })
      }
    })
  }

}

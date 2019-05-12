import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie, Song } from '../../entities';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieName;
  public movie: Movie;
  public songs: Array<Song>;
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
        this.movieDocument.valueChanges().subscribe(movie => {
          this.movie = movie;
        })

        this.songsCollection = this.movieDocument.collection('songs');
        this.songsCollection.valueChanges().subscribe(songs => {
          this.songs = songs;
        });
      }
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Movie, Song, SongWithId } from '../../entities';
import { SeoService } from '../../services/seo'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieName;
  public movie: Movie;
  public songs: Array<SongWithId>;
  public routeParams;
  private movieDocument: AngularFirestoreDocument<Movie>;
  private moviesCollection: AngularFirestoreCollection<Movie>;
  private songsCollection: AngularFirestoreCollection<Song>;

  constructor(
    private activateRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private location: Location,
    private router: Router,
    private seoSerive: SeoService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      this.routeParams = param;
      if(param.movieName) {
        this.movieDocument = this.afs.doc(`movies/${param.movieName}`);
        this.movieDocument.valueChanges().subscribe(movie => {
          if(!movie) return;
          this.movie = movie;
          this.seoSerive.populate(movie.seoInfo);
        })

        this.songsCollection = this.movieDocument.collection('songs');
        this.songsCollection.snapshotChanges().pipe(map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data() as Song;
            const id = action.payload.doc.id;
            return {id, ...data}
          })
        })).subscribe(songs => {
          this.songs = songs;
        })
      }
    })
  }

  onBack() {
    this.location.back();
  }
}

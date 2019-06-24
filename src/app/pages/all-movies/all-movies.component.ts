import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer, DOCUMENT } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Movie, MovieWithId } from '../../entities';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  
  public movies: Array<MovieWithId>
  private moviesCollection: AngularFirestoreCollection<Movie>;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    @Inject(DOCUMENT) private doc,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 

  }

  ngOnInit() {
    this.moviesCollection = this.afs.collection('movies');
    this.moviesCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Movie;
        const id = action.payload.doc.id;
        return {id, ...data}
      })
    })).subscribe(movies => {
      this.movies = movies;
    })
  }

  naviagteTo(movie) {
    this.router.navigateByUrl(`/movies/${movie.id}`);
  }
}

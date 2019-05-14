import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Movie } from '../../entities';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface MovieWithId extends Movie {
  id: string;
}

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  public movies: Array<MovieWithId>
  private moviesCollection: AngularFirestoreCollection<Movie>;

  constructor(
    private afs: AngularFirestore,
    private router: Router
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

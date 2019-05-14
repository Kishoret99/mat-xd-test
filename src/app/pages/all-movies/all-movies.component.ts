import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Movie } from '../../entities';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  public movies: Array<Movie>
  private moviesCollection: AngularFirestoreCollection<Movie>;

  constructor(
    private afs: AngularFirestore
  ) { 

  }

  ngOnInit() {
    this.moviesCollection = this.afs.collection('movies');
    this.moviesCollection.valueChanges().subscribe(movies => {
      this.movies = movies;
    })
  }
}

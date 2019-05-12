import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Movie } from '../../entities';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

  public movies: Array<Movie>;
  private moviesCollection: AngularFirestoreCollection<Movie>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.moviesCollection = this.afs.collection('movies', ref => {
      return ref.orderBy('createdAt', 'desc').limit(3);
    });
    this.moviesCollection.valueChanges().subscribe(movies => {
      console.log(movies);
      this.movies = movies;
    })
  }

  ngOnDestroy() {

  }

}

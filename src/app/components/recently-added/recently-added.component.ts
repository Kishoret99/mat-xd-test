import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Movie, MovieWithId } from '../../entities';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
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

  ngOnDestroy() {

  }

}

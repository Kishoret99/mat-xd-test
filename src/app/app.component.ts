import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
// import { StoreService } from './services/store'


export interface Movie {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  movie: Observable<Movie>;
  movies;
  songs;
  s = new Array(4)
  title = 'mat-xd-test';
  
  private movieDoc: AngularFirestoreDocument<Movie>;
  private counter = 0;


  constructor(
    private db: AngularFirestore,
    // private store: StoreService
  ) {}


  ngOnInit() {
    // this.store.subscribe('cart').subscribe(cart => {
    //   console.log('> cart', cart);
    //   this.counter = cart;
    //   console.log('> counter', this.counter);
    // })
  }

  updateSongs() {

  }

  updateCart() {
    console.log('> came here', this.counter++)

    // this.store.publish('cart', this.counter++);
  }
}

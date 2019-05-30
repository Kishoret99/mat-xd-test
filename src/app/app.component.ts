import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
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
    @Inject(PLATFORM_ID) private platformId: Object,
    // private store: StoreService
  ) {}


  ngOnInit() {
    // this.store.subscribe('cart').subscribe(cart => {
    //   console.log('> cart', cart);
    //   this.counter = cart;
    //   console.log('> counter', this.counter);
    // })
    
    if (isPlatformBrowser(this.platformId)) {
      this.db.firestore.enablePersistence().catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
      });
    }
  }

  updateSongs() {

  }

  updateCart() {
    console.log('> came here', this.counter++)

    // this.store.publish('cart', this.counter++);
  }
}

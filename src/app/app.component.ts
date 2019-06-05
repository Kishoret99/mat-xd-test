import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { SwUpdate, ɵangular_packages_service_worker_service_worker_a } from '@angular/service-worker'
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
    private swUpdate: SwUpdate,
    private ngswCommChannel: ɵangular_packages_service_worker_service_worker_a
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

    this.swUpdate.available.pipe(mergeMap(upateActivatedEvent => {
      console.log('> update available events',upateActivatedEvent )
      return from(this.swUpdate.activateUpdate())
    })).subscribe(res => {
      console.log('> this should be printed for this update', res)
    })

    this.swUpdate.activated.subscribe( updateAvailableEvent=> {
      console.log('> Update activated events', updateAvailableEvent);
    });

    this.ngswCommChannel.events.subscribe(event => {
      console.log('> event', event);
    })
  }

  updateSongs() {

  }

  updateCart() {
    console.log('> please', this.counter++)

    // this.store.publish('cart', this.counter++);
  }
}

import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
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
    private swUpdate: SwUpdate,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private doc
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
    } else {
      this.gtmScript();
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
  }

  private updateCart() {
    console.log('> please', this.counter++)

    // this.store.publish('cart', this.counter++);
  }

  private gtmScript() {
    const element = this.doc.createElement('script');
    const innerHtml = 
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${environment.gtmId}');`
    element.innerHTML = innerHtml;
    const head = this.doc.getElementsByTagName('head')[0]
    head.appendChild(element);
  }
}

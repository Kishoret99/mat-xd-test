import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { APP_STATE, Store } from './store/core';
import * as TODO_ACTIONS from './store/todos/actions';
import * as BANNERS_ACTIONS from './store/banners/actions';
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

  public showHeader: boolean = false;
  public title = 'mat-xd-test';
  private appTabBar: HTMLElement;
  private counter: number = 0;
  private content: HTMLElement;
  private tabBar: HTMLElement;
  public textInput: string = 'Hello';


  constructor(
    private db: AngularFirestore,
    private router: Router,
    private swUpdate: SwUpdate,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private doc,
    @Inject(APP_STATE) private store: Store,
    // private store: StoreService
  ) {}


  ngOnInit() {
    
    // this.store.subscribe('cart').subscribe(cart => {
    //   console.log('> cart', cart);
    //   this.counter = cart;
    //   console.log('> counter', this.counter);
    // })
    console.log('kishore', this.store.getState())
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
      this.router.events.subscribe(url => {
        if(url instanceof NavigationEnd) {
          if(url.urlAfterRedirects == '/home' || url.urlAfterRedirects == '/movies')  {
            this.showHeader = true;
            if(!isPlatformServer(this.platformId))  {
              setTimeout(this.tabScrollAnimation(this), 500);
            };
          } else {
            this.showHeader = false;
          }
        }
      })
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

  ngAfterViewInit() {
    if(isPlatformServer(this.platformId)) return;
  }

  tabScrollAnimation(self) {
    return function() {
      self.appTabBar = self.doc.querySelector('.mdc-top-app-bar');
      self.tabBar = self.doc.querySelector('.mdc-tab-bar');
      // this.content = this.doc.querySelector('.content');
      let scrollPosition = window.pageYOffset;
      const offset = self.tabBar.offsetTop
      window.addEventListener('scroll', () => {
        self.content = self.doc.querySelector('.content');
        if(window.pageYOffset > offset) {
          // self.appTabBar.classList.remove('mdc-top-app-bar--scroll');
          // self.appTabBar.classList.add('mdc-top-app-bar--hide');
  
          self.tabBar.classList.remove('mdc-tab-bar--scroll');
          self.tabBar.classList.add('mdc-tab-bar--fixed');
  
          self.content.classList.add('content--fixed');
        } else {
          // self.appTabBar.classList.add('mdc-top-app-bar--scroll');
          // self.appTabBar.classList.remove('mdc-top-app-bar--hide');
  
          self.tabBar.classList.add('mdc-tab-bar--scroll');
          self.tabBar.classList.remove('mdc-tab-bar--fixed');
  
          self.content.classList.remove('content--fixed');
        }
      })
    }
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


  handleclick() {
    this.store.dispatch(TODO_ACTIONS.addToDoAction(this.textInput));
  }

  handleclick2() {
    // console.log(this.textInput);
    this.store.dispatch(TODO_ACTIONS.addToDoAsyncAction());
  }

  handleGetBanners() {
    this.store.dispatch(BANNERS_ACTIONS.getBannersRequestAction())
  }
}

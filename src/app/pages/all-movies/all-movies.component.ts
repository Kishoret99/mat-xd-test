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
  private appTabBar: HTMLElement;
  private content: HTMLElement;
  private moviesCollection: AngularFirestoreCollection<Movie>;
  private tabBar: HTMLElement;

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

    if(isPlatformServer(this.platformId)) return;
    this.appTabBar = this.doc.querySelector('.mdc-top-app-bar');
    this.tabBar = this.doc.querySelector('.mdc-tab-bar');
    this.content = this.doc.querySelector('.content');
  }

  naviagteTo(movie) {
    this.router.navigateByUrl(`/movies/${movie.id}`);
  }

  ngAfterViewInit() {
    if(isPlatformServer(this.platformId)) return;
    const self = this;
    let scrollPosition = window.pageYOffset;
    const offset = this.tabBar.offsetTop
    window.addEventListener('scroll', () => {
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

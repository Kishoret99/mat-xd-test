import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface BannerDoc {
  active: boolean,
  imageUrl: string,
  movieLink: string,
  title: string
}


@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {
  public banners: Observable<BannerDoc[]>;

  private bannersCollection: AngularFirestoreCollection<BannerDoc>;
  private bannersCollectionName: string = 'banners';

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    this.bannersCollection = this.afs.collection(this.bannersCollectionName);
    this.banners = this.bannersCollection.valueChanges();
    this.banners.subscribe(test => {
      console.log(test);
    })
  }

  navigateTo(banner: BannerDoc) {
    this.router.navigateByUrl(banner.movieLink);
  }

}

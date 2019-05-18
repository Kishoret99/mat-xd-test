import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HomeComponent } from './pages/home/home.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';
import { LyricDetailsComponent } from './pages/lyric-details/lyric-details.component';
import { CurrentPlayingComponent } from './components/current-playing/current-playing.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    MovieDetailsComponent,
    HomeComponent,
    AllMoviesComponent,
    LyricDetailsComponent,
    CurrentPlayingComponent,
    NewReleasesComponent,
    RecentlyAddedComponent,
    FooterNavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({...environment.firebase}),
    AngularFirestoreModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatTabsModule,
    MatToolbarModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

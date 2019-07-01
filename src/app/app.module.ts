import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { HomeComponent } from './pages/home/home.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';
import { CurrentPlayingComponent } from './components/current-playing/current-playing.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeSelectorDropdownComponent } from './components/theme-selector-dropdown/theme-selector-dropdown.component'


@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    HomeComponent,
    AllMoviesComponent,
    CurrentPlayingComponent,
    NewReleasesComponent,
    RecentlyAddedComponent,
    DesktopHeaderComponent,
    HeaderComponent,
    TabBarComponent,
    ThemeSelectorDropdownComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp({...environment.firebase}),
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FlexLayoutModule.withConfig({ssrObserveBreakpoints: ['xs', 'gt-xs']}),
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: environment.firebase },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

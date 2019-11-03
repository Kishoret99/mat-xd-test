import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { LyricDetailsComponent } from './pages/lyric-details/lyric-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'en/home', component: HomeComponent },
  {path: 'te/home', component: HomeComponent },
  {path: 'movies', component: AllMoviesComponent },
  {path: 'movies/:movieName', component: MovieDetailsComponent},
  {path: 'movies/:movieName/lyrics/:songName', component: LyricDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // enableTracing: true,
        scrollPositionRestoration: 'enabled'
      }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

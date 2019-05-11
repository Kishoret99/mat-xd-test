import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HomeComponent } from './pages/home/home.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';
import { LyricDetailsComponent } from './pages/lyric-details/lyric-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'movies', component: AllMoviesComponent },
  {path: 'movies/:movieName', component: MovieDetailsComponent},
  {path: 'movies/:movieName/lyrics/:songName', component: LyricDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

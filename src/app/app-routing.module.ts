import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllMoviesComponent } from './pages/all-movies/all-movies.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'movies', component: AllMoviesComponent },
  // {path: 'movies/:movieName',loadChildren: () => import('./pages/movie-details/movie-details.module').then(mod => mod.MovieDetailsModule)},
  // {path: 'movies/:movieName/lyrics/:songName',loadChildren: () => import('./pages/lyric-details/lyric-details.module').then(mod => mod.LyricDetailsModule)},
  // {path: 'search', loadChildren: () => import('./pages/search/search.module').then(mod => mod.SearchModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

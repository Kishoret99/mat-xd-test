import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyricDetailsComponent } from './lyric-details.component';
import { Routes, RouterModule } from '@angular/router';
// import  { AngularMaterialModule } from '../../angular-material.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: LyricDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressBarModule,
    MatIconModule,
    // AngularMaterialModule
  ],
  declarations: [LyricDetailsComponent]
})
export class LyricDetailsModule {}

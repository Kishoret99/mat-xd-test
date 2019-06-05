import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Movie, Song } from '../../entities';

export interface Lyric {
  languageCode: string,
  lyricist: string,
  lyrics: string,
  singer: Array<string>,
  title: string;
  movieTitle: string
}

@Component({
  selector: 'app-lyric-details',
  templateUrl: './lyric-details.component.html',
  styleUrls: ['./lyric-details.component.scss']
})
export class LyricDetailsComponent implements OnInit {
  public bufferValue = 75;
  public color = 'accent';
  public lyric: Lyric;
  public lyricLines: Array<string>;
  public mode = 'determinate';
  public value = 50;
  private lyricDocument: AngularFirestoreDocument<Lyric>;

  constructor(
    private afs: AngularFirestore,
    private activateRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      if(param.movieName) {
        this.lyricDocument = this.afs.doc(`movies/${param.movieName}/songs/${param.songName}`);
        this.lyricDocument.valueChanges().subscribe(lyric => {
          this.lyric = lyric;
          this.lyricLines = this.lyric.lyrics.split('\\n');
          console.log('>', this.lyricLines);
        })
      }
    })
  }
  onBack() {
    this.location.back();
  }
}

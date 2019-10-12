import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store';

@Component({
  selector: 'app-current-playing',
  templateUrl: './current-playing.component.html',
  styleUrls: ['./current-playing.component.scss']
})
export class CurrentPlayingComponent implements OnInit {

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {
  }

}

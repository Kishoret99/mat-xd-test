import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public value;
  notes = [
    {
      name: 'Vacation Itinerary',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    },
    {
      name: 'Kitchen Remodel',
    }
  ];
  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }
  onBack() {
    this.location.back();
  }

  onAutoFill(result) {
    console.log('auto fill', result);
  }
  onResultClick(result) {
    console.log('result click', result);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSearch() {
    this.router.navigateByUrl('search');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit {

  public navLinks = [
    {
      path: '/home',
      isActive: true,
      label: 'home',
      icon: 'home'
    },
    {
      path: '/movies',
      isActive: false,
      label: 'all',
      icon: 'dashboard'
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}

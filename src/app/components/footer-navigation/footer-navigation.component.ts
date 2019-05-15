import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss']
})
export class FooterNavigationComponent implements OnInit {
  public navLinks = [
    {
      path: '/home',
      isActive: true,
      label: 'home' 
    },
    {
      path: '/movies',
      isActive: false,
      label: 'all'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
